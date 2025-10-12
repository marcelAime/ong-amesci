# Instructions Authentification & Paystack

## ✅ PAYSTACK EN MODE LIVE

Le code est **déjà configuré en mode LIVE** avec votre clé publique :
- `pk_live_2d8acc6eadf2bed8a74edb9669e1e33b02c6b709`

Si vous voyez encore "Test" lors des paiements, cela vient de votre compte Paystack :

### Actions à faire sur Paystack :

1. **Connectez-vous à votre Dashboard Paystack** : https://dashboard.paystack.com/
2. **Allez dans Settings → Preferences**
3. **Activez le mode Live** si ce n'est pas déjà fait
4. **Vérifiez que votre compte est complètement vérifié** (documents KYC, etc.)
5. **Testez un paiement réel** pour confirmer

Le message "Test" disparaîtra une fois que votre compte Paystack sera complètement activé en mode production.

---

## ✅ AUTHENTIFICATION DU RESPONSABLE

### Système Complet Disponible

Accédez à la page d'authentification : **[Votre URL]/auth**

Le système inclut maintenant :

### 1. **Inscription (Créer un compte)**
   - Le responsable peut créer son propre compte
   - Email : `contact@ong-ames-ci.org`
   - Mot de passe : À définir par le responsable (minimum 8 caractères)
   - **Confirmation par email requise** : Un email de vérification sera envoyé

### 2. **Connexion**
   - Se connecter avec l'email et le mot de passe
   - Accès au dashboard après connexion réussie

### 3. **Récupération de mot de passe**
   - Option "Mot de passe oublié ?" disponible
   - Un email avec un lien de réinitialisation sera envoyé
   - Le responsable peut définir un nouveau mot de passe

---

## 🔧 Configuration Email (Important)

Pour que les emails de confirmation et de récupération fonctionnent :

1. **Allez dans votre Supabase** : https://supabase.com/dashboard
2. **Sélectionnez votre projet AMES-CI**
3. **Authentication → Email Templates**
4. **Vérifiez que les templates sont configurés** :
   - Confirmation Signup
   - Reset Password
   - Magic Link

5. **Redirect URLs** :
   - Allez dans **Authentication → URL Configuration**
   - Ajoutez votre URL de production dans "Redirect URLs"
   - Format : `https://votre-domaine.com/auth`

---

## 📝 Étapes pour le Responsable

### Première connexion :

1. Aller sur : **[Votre URL]/auth**
2. Cliquer sur **"Créer un compte"**
3. Entrer :
   - Email : `contact@ong-ames-ci.org`
   - Mot de passe : (choisir un mot de passe sécurisé)
   - Confirmer le mot de passe
4. Cliquer sur **"Créer le compte"**
5. **Vérifier l'email** et cliquer sur le lien de confirmation
6. Retourner sur **/auth** et **se connecter**

### Si mot de passe oublié :

1. Cliquer sur **"Mot de passe oublié ?"**
2. Entrer l'email
3. Vérifier l'email reçu
4. Cliquer sur le lien et définir un nouveau mot de passe

---

## 🔒 Sécurité

- ✅ Les mots de passe sont chiffrés par Supabase
- ✅ Confirmation par email obligatoire
- ✅ Système de récupération sécurisé
- ✅ Accès dashboard protégé

---

## ℹ️ Notes Importantes

- **Système d'inscription ouvert** : Tout administrateur peut créer un compte
- **Confirmation email requise** : Les comptes doivent être vérifiés par email
- **Pas de compte par défaut** : Le responsable doit créer son propre compte
- Si besoin de restreindre les inscriptions, contactez le développeur
