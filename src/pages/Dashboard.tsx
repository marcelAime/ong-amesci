import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, DollarSign, CreditCard, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

interface Transaction {
  id: number;
  amount: number;
  currency: string;
  status: string;
  reference: string;
  paid_at: string;
  customer: {
    email: string;
    first_name?: string;
    last_name?: string;
  };
}

interface TransactionData {
  status: boolean;
  message: string;
  data: Transaction[];
  meta?: {
    total: number;
    total_volume: number;
  };
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [totalAmount, setTotalAmount] = useState(0);
  const [successfulTransactions, setSuccessfulTransactions] = useState(0);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast.error("Accès non autorisé");
      navigate("/auth");
      return;
    }
    
    setUser(user);
    await fetchTransactions();
  };

  const fetchTransactions = async () => {
    try {
      setRefreshing(true);
      
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast.error("Session expirée");
        navigate("/auth");
        return;
      }

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      
      const response = await fetch(
        `${supabaseUrl}/functions/v1/paystack-transactions`,
        {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des transactions");
      }

      const result: TransactionData = await response.json();
      
      if (result.status && result.data) {
        setTransactions(result.data);
        
        // Calculer les statistiques
        const successful = result.data.filter(t => t.status === "success");
        setSuccessfulTransactions(successful.length);
        
        const total = successful.reduce((sum, t) => sum + t.amount, 0);
        setTotalAmount(total / 100); // Convertir de kobo en naira/FCFA
        
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Impossible de charger les transactions");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XOF",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: string) => {
    const statusMap: { [key: string]: { label: string; className: string } } = {
      success: { label: "Réussi", className: "bg-green-100 text-green-800" },
      pending: { label: "En attente", className: "bg-yellow-100 text-yellow-800" },
      failed: { label: "Échoué", className: "bg-red-100 text-red-800" },
    };
    
    const statusInfo = statusMap[status] || { label: status, className: "bg-gray-100 text-gray-800" };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.className}`}>
        {statusInfo.label}
      </span>
    );
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard AMES-CI - Transactions Paystack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Tableau de bord AMES-CI</h1>
                <p className="text-sm text-gray-600 mt-1">
                  Dernière mise à jour : {lastUpdate.toLocaleString("fr-FR")}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={fetchTransactions}
                disabled={refreshing}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
                Actualiser
              </Button>
              <Button variant="destructive" size="sm" onClick={handleLogout}>
                Déconnexion
              </Button>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Montant Total Reçu
                </CardTitle>
                <DollarSign className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">
                  {formatCurrency(totalAmount)}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Transactions Réussies
                </CardTitle>
                <CheckCircle className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">
                  {successfulTransactions}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Total Transactions
                </CardTitle>
                <CreditCard className="h-5 w-5 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">
                  {transactions.length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transactions Table */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Historique des Transactions</CardTitle>
              <CardDescription>
                Liste complète des paiements reçus via Paystack
              </CardDescription>
            </CardHeader>
            <CardContent>
              {transactions.length === 0 ? (
                <div className="text-center py-12">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Aucune transaction pour le moment</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Référence</TableHead>
                        <TableHead>Payeur</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">Montant</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Statut</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-mono text-xs">
                            {transaction.reference}
                          </TableCell>
                          <TableCell>
                            {transaction.customer.first_name || transaction.customer.last_name
                              ? `${transaction.customer.first_name || ""} ${transaction.customer.last_name || ""}`.trim()
                              : "N/A"}
                          </TableCell>
                          <TableCell className="text-sm">
                            {transaction.customer.email}
                          </TableCell>
                          <TableCell className="text-right font-semibold">
                            {formatCurrency(transaction.amount / 100)}
                          </TableCell>
                          <TableCell className="text-sm">
                            {formatDate(transaction.paid_at)}
                          </TableCell>
                          <TableCell>
                            {getStatusBadge(transaction.status)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
