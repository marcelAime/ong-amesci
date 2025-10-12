import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Lock, Mail, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "signup" | "reset">("login");

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      navigate("/dashboard");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          toast.error("Email ou mot de passe incorrect");
        } else {
          toast.error("Erreur de connexion : " + error.message);
        }
        return;
      }

      if (data.user) {
        toast.success("Connexion réussie !");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    if (password.length < 8) {
      toast.error("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
        }
      });

      if (error) {
        toast.error("Erreur d'inscription : " + error.message);
        return;
      }

      if (data.user) {
        toast.success("Inscription réussie ! Veuillez vérifier votre email pour confirmer votre compte.");
        setMode("login");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Veuillez entrer votre adresse email");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth`,
      });

      if (error) {
        toast.error("Erreur : " + error.message);
        return;
      }

      toast.success("Email de récupération envoyé ! Vérifiez votre boîte mail.");
      setMode("login");
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Connexion Dashboard AMES-CI</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="space-y-3 text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Dashboard AMES-CI</CardTitle>
            <CardDescription>
              {mode === "login" && "Accès réservé aux administrateurs"}
              {mode === "signup" && "Créer votre compte administrateur"}
              {mode === "reset" && "Réinitialiser votre mot de passe"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {mode === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@ong-ames-ci.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      disabled={loading}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => setMode("reset")}
                    className="text-sm px-0"
                  >
                    Mot de passe oublié ?
                  </Button>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Connexion..." : "Se connecter"}
                </Button>

                <div className="text-center space-y-2">
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => setMode("signup")}
                    className="text-sm"
                  >
                    Créer un compte
                  </Button>
                  <div>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => navigate("/")}
                      className="text-sm"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Retour au site
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {mode === "signup" && (
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      disabled={loading}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      disabled={loading}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Minimum 8 caractères
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10"
                      disabled={loading}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Création..." : "Créer le compte"}
                </Button>

                <div className="text-center space-y-2">
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => setMode("login")}
                    className="text-sm"
                  >
                    Déjà un compte ? Se connecter
                  </Button>
                  <div>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => navigate("/")}
                      className="text-sm"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Retour au site
                    </Button>
                  </div>
                </div>
              </form>
            )}

            {mode === "reset" && (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reset-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="reset-email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      disabled={loading}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nous vous enverrons un lien pour réinitialiser votre mot de passe
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Envoi..." : "Envoyer le lien"}
                </Button>

                <div className="text-center space-y-2">
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => setMode("login")}
                    className="text-sm"
                  >
                    Retour à la connexion
                  </Button>
                  <div>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => navigate("/")}
                      className="text-sm"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Retour au site
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Auth;
