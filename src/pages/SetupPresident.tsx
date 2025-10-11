import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle2, AlertCircle, Loader2, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SetupPresident = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'exists'>('idle');
  const navigate = useNavigate();

  const createPresidentAccount = async () => {
    setLoading(true);
    setStatus('idle');

    try {
      console.log('Appel de la fonction create-president-account...');
      
      const { data, error } = await supabase.functions.invoke('create-president-account', {
        body: {}
      });

      if (error) {
        console.error('Erreur:', error);
        throw error;
      }

      console.log('Réponse:', data);

      if (data.success) {
        if (data.alreadyExists) {
          setStatus('exists');
          toast.info("Le compte président existe déjà", {
            description: "Vous pouvez vous connecter avec les identifiants fournis"
          });
        } else {
          setStatus('success');
          toast.success("Compte créé avec succès !", {
            description: "Le président peut maintenant se connecter"
          });
        }
      } else {
        throw new Error(data.error || 'Erreur inconnue');
      }
    } catch (error) {
      console.error('Erreur complète:', error);
      setStatus('error');
      toast.error("Erreur lors de la création du compte", {
        description: error instanceof Error ? error.message : "Une erreur est survenue"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">Configuration Compte Président</CardTitle>
          <CardDescription className="text-base">
            Créer automatiquement le compte d'accès au Dashboard AMES-CI
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Informations du compte */}
          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Identifiants du compte
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-medium">contact@ong-ames-ci.org</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mot de passe:</span>
                <span className="font-mono text-xs">RTpIp4SUwUMV6ldGxcucAw==</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rôle:</span>
                <span className="font-medium">Président</span>
              </div>
            </div>
          </div>

          {/* Statut */}
          {status !== 'idle' && (
            <div className={`rounded-lg p-4 flex items-start gap-3 ${
              status === 'success' ? 'bg-green-50 text-green-900' :
              status === 'exists' ? 'bg-blue-50 text-blue-900' :
              'bg-red-50 text-red-900'
            }`}>
              {status === 'success' && <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />}
              {status === 'exists' && <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
              {status === 'error' && <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
              <div>
                <p className="font-medium">
                  {status === 'success' && 'Compte créé avec succès !'}
                  {status === 'exists' && 'Compte déjà existant'}
                  {status === 'error' && 'Erreur lors de la création'}
                </p>
                <p className="text-sm mt-1 opacity-90">
                  {status === 'success' && 'Le président peut maintenant se connecter au Dashboard'}
                  {status === 'exists' && 'Le compte existe déjà dans la base de données'}
                  {status === 'error' && 'Veuillez réessayer ou contacter le support'}
                </p>
              </div>
            </div>
          )}

          {/* Boutons d'action */}
          <div className="flex flex-col gap-3">
            <Button
              onClick={createPresidentAccount}
              disabled={loading}
              className="w-full"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Création en cours...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5 mr-2" />
                  Créer le compte président
                </>
              )}
            </Button>

            {status === 'success' || status === 'exists' ? (
              <Button
                variant="outline"
                onClick={() => navigate('/auth')}
                className="w-full"
                size="lg"
              >
                Aller à la page de connexion
              </Button>
            ) : null}

            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="w-full"
            >
              Retour au site
            </Button>
          </div>

          {/* Note importante */}
          <div className="text-xs text-muted-foreground bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="font-semibold text-amber-900 mb-2">⚠️ Note importante :</p>
            <ul className="space-y-1 text-amber-800">
              <li>• Cette page est destinée à la configuration initiale uniquement</li>
              <li>• Le compte ne sera créé qu'une seule fois</li>
              <li>• Si le compte existe déjà, vous recevrez une notification</li>
              <li>• Conservez ces identifiants en lieu sûr</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SetupPresident;
