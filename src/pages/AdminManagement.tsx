import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, UserPlus, Trash2, Shield } from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/ames/Footer";

// Helper function to check user role
const checkUserRole = async (userId: string, role: string): Promise<{ data: boolean | null, error: any }> => {
  try {
    const { data, error } = await (supabase as any).rpc('has_role', { 
      _user_id: userId, 
      _role: role 
    });
    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
};

interface AdminUser {
  id: string;
  user_id: string;
  role: string;
  created_at: string;
  email?: string;
}

const AdminManagement = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [processing, setProcessing] = useState(false);

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
    
    // Check if user has admin role
    const { data: hasAdmin, error: roleError } = await checkUserRole(user.id, 'admin');

    if (roleError || !hasAdmin) {
      toast.error("Accès refusé - privilèges insuffisants");
      await supabase.auth.signOut();
      navigate("/");
      return;
    }
    
    setUser(user);
    await fetchAdmins();
  };

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      
      // Get all admin role assignments
      const { data: adminRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('*')
        .eq('role', 'admin');

      if (rolesError) throw rolesError;

      // Get user emails from auth (requires service role or admin API access)
      // Since we can't access auth.users directly, we'll just show user IDs
      setAdmins(adminRoles || []);
      
    } catch (error) {
      console.error("Admin fetch error");
      toast.error("Erreur lors du chargement des administrateurs");
    } finally {
      setLoading(false);
    }
  };

  const assignAdminRole = async () => {
    if (!newAdminEmail.trim()) {
      toast.error("Veuillez entrer une adresse email");
      return;
    }

    setProcessing(true);
    try {
      // First verify current user is still admin
      const { data: isAdmin } = await checkUserRole(user.id, 'admin');
      
      if (!isAdmin) {
        toast.error("Vous n'avez plus les privilèges d'administrateur");
        navigate("/");
        return;
      }

      // Get user by email using auth admin API (requires service role)
      // Since we can't do this from client, we'll need to use an edge function
      // For now, show instructions to add manually via SQL
      
      toast.info(
        "Pour ajouter un administrateur, utilisez cette commande SQL dans votre console Supabase:\n\n" +
        `INSERT INTO public.user_roles (user_id, role)\n` +
        `SELECT id, 'admin'::app_role\n` +
        `FROM auth.users\n` +
        `WHERE email = '${newAdminEmail}'\n` +
        `ON CONFLICT (user_id, role) DO NOTHING;`,
        { duration: 10000 }
      );

      setNewAdminEmail("");
      
    } catch (error) {
      console.error("Admin assignment error");
      toast.error("Erreur lors de l'attribution du rôle");
    } finally {
      setProcessing(false);
    }
  };

  const revokeAdminRole = async (roleId: string, userId: string) => {
    if (userId === user.id) {
      toast.error("Vous ne pouvez pas retirer votre propre rôle d'administrateur");
      return;
    }

    if (!confirm("Êtes-vous sûr de vouloir retirer ce rôle d'administrateur ?")) {
      return;
    }

    setProcessing(true);
    try {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('id', roleId);

      if (error) throw error;

      toast.success("Rôle administrateur retiré avec succès");
      await fetchAdmins();
      
    } catch (error) {
      console.error("Role revocation error");
      toast.error("Erreur lors de la révocation du rôle");
    } finally {
      setProcessing(false);
    }
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
        <title>Gestion des Administrateurs - AMES-CI</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigate("/dashboard")}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <Shield className="h-8 w-8" />
                  Gestion des Administrateurs
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Gérer les rôles d'administrateur de l'application
                </p>
              </div>
            </div>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>

          {/* Add Admin Form */}
          <Card className="bg-white shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-5 w-5" />
                Ajouter un Administrateur
              </CardTitle>
              <CardDescription>
                Instructions pour attribuer le rôle d'administrateur à un utilisateur
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Adresse Email</Label>
                <div className="flex gap-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="utilisateur@exemple.com"
                    value={newAdminEmail}
                    onChange={(e) => setNewAdminEmail(e.target.value)}
                    disabled={processing}
                  />
                  <Button 
                    onClick={assignAdminRole}
                    disabled={processing || !newAdminEmail.trim()}
                  >
                    Obtenir la commande SQL
                  </Button>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                <p className="font-medium text-blue-900 mb-2">⚠️ Note importante :</p>
                <p className="text-blue-800">
                  Pour des raisons de sécurité, l'attribution du rôle d'administrateur nécessite 
                  l'exécution d'une commande SQL dans votre console Supabase. Cliquez sur le bouton 
                  ci-dessus pour obtenir la commande à exécuter.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Admins List */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Administrateurs Actuels</CardTitle>
              <CardDescription>
                Liste des utilisateurs ayant le rôle d'administrateur ({admins.length} total)
              </CardDescription>
            </CardHeader>
            <CardContent>
              {admins.length === 0 ? (
                <div className="text-center py-12">
                  <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Aucun administrateur trouvé</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Utilisateur</TableHead>
                        <TableHead>Rôle</TableHead>
                        <TableHead>Date d'attribution</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {admins.map((admin) => (
                        <TableRow key={admin.id}>
                          <TableCell className="font-mono text-xs">
                            {admin.user_id.substring(0, 8)}...
                          </TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              Administrateur
                            </span>
                          </TableCell>
                          <TableCell className="text-sm">
                            {new Date(admin.created_at).toLocaleDateString("fr-FR")}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => revokeAdminRole(admin.id, admin.user_id)}
                              disabled={processing || admin.user_id === user.id}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Retirer
                            </Button>
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
      <Footer />
    </>
  );
};

export default AdminManagement;
