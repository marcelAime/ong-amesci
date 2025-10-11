# Instructions importantes pour l'authentification et Paystack

## 🔐 Authentification du Président

### Création du compte dans Supabase

Le compte président doit être créé manuellement dans Supabase :

**Identifiants à créer :**
- Email : `contact@ong-ames-ci.org`
- Mot de passe : `RTpIp4SUwUMV6ldGxcucAw==`

### Étapes pour créer le compte :

1. **Se connecter à Supabase :**
   - Aller sur https://supabase.com
   - Se connecter au projet AMES-CI

2. **Créer l'utilisateur :**
   - Aller dans "Authentication" → "Users"
   - Cliquer sur "Add user" → "Create new user"
   - Entrer :
     - Email: `contact@ong-ames-ci.org`
     - Mot de passe: `RTpIp4SUwUMV6ldGxcucAw==`
     - Cocher "Auto Confirm User" pour éviter la validation par email
   - Cliquer sur "Create user"

3. **Accès au Dashboard :**
   - Une fois créé, le président pourra se connecter via `/auth`
   - Il aura accès au Dashboard pour voir les transactions

### Changement de mot de passe

Le président peut changer son mot de passe :
- Via le Dashboard (fonctionnalité à ajouter si nécessaire)
- Via Supabase directement dans "Authentication" → "Users"

---

## 💳 Configuration Paystack en Mode LIVE

### Vérification de la clé actuelle

La clé Paystack LIVE est configurée dans le code :
- `pk_live_2d8acc6eadf2bed8a74edb9669e1e33b02c6b709`

### Pourquoi "Test" s'affiche encore ?

Le message "Test" qui apparaît lors du paiement peut provenir de :

1. **Le compte Paystack est en mode Test**
   - Même avec une clé `pk_live_...`, si votre compte Paystack n'est pas activé en production, les paiements restent en mode test
   
2. **Solution :**
   - Se connecter à https://dashboard.paystack.com
   - Aller dans "Settings" → "Account Settings"
   - Vérifier que votre compte est activé pour les transactions LIVE
   - Il faut souvent soumettre des documents d'entreprise pour activer le mode LIVE

3. **Activation du compte Live :**
   - Soumettre les documents requis (KYC)
   - Attendre l'approbation de Paystack
   - Une fois approuvé, le mode "Test" disparaîtra automatiquement

### Note importante

**Le code est déjà configuré en LIVE**, le problème vient uniquement de l'activation du compte Paystack sur leur plateforme.

---

## 📝 Résumé des actions à faire

✅ **Fait dans le code :**
- Configuration Paystack LIVE
- Page d'authentification fonctionnelle
- Dashboard avec accès restreint

⚠️ **À faire manuellement :**
1. Créer l'utilisateur président dans Supabase Authentication
2. Activer le compte Paystack en mode LIVE sur dashboard.paystack.com

---

Pour toute question, contacter le support technique.
