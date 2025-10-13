# Configuration du Rôle Administrateur - AMES-CI

## 🚨 Action Requise Immédiatement

Les mesures de sécurité critiques ont été implémentées. Vous devez maintenant créer les tables de base de données et attribuer le rôle administrateur.

## Étape 1: Créer les Tables de Sécurité

1. **Connectez-vous à votre projet Supabase**
   - Allez sur [https://supabase.com](https://supabase.com)
   - Sélectionnez votre projet AMES-CI

2. **Ouvrez l'éditeur SQL**
   - Cliquez sur "SQL Editor" dans le menu de gauche
   - Cliquez sur "New query"

3. **Exécutez le fichier SQL**
   - Ouvrez le fichier `CREATE_ADMIN_TABLES.sql` (dans le dossier racine du projet)
   - Copiez tout son contenu
   - Collez-le dans l'éditeur SQL de Supabase
   - **IMPORTANT:** Vérifiez que l'email `contact@ong-ames-ci.org` dans le fichier correspond bien à l'email du président
   - Cliquez sur "Run" pour exécuter

## Étape 2: Vérifier la Configuration

Après l'exécution du script SQL, vous devriez voir:
- ✅ Tables créées: `user_roles`, `audit_logs`
- ✅ Fonction créée: `has_role()`
- ✅ Rôle admin attribué au président
- ✅ Un résultat affichant l'email et le rôle admin

## Étape 3: Tester l'Accès

1. **Le président doit se connecter**
   - Allez sur `/auth`
   - Connectez-vous avec l'email: `contact@ong-ames-ci.org`
   - Accédez au dashboard: `/dashboard`

2. **Vérifier le refus d'accès pour les autres**
   - Créez un compte test avec un autre email
   - Essayez d'accéder au dashboard
   - ❌ Vous devriez voir: "Accès refusé - privilèges insuffisants"

## 🔒 Sécurité Implémentée

### Ce qui est maintenant protégé:
- ✅ **Dashboard:** Accessible uniquement aux admins
- ✅ **Transactions Paystack:** Vérification du rôle admin côté serveur
- ✅ **Base de données:** RLS activé sur toutes les tables sensibles
- ✅ **Fonction sécurisée:** `has_role()` utilise SECURITY DEFINER

### Ce qui a été corrigé:
- ❌ Avant: N'importe qui pouvait accéder au dashboard
- ✅ Maintenant: Seuls les admins peuvent accéder
- ❌ Avant: Pas de validation des rôles côté serveur
- ✅ Maintenant: Validation stricte dans l'edge function
- ❌ Avant: Pas de table de rôles
- ✅ Maintenant: Table `user_roles` avec RLS

## 📝 Commandes SQL Utiles

### Attribuer le rôle admin à un autre utilisateur
```sql
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
WHERE email = 'nouvel-admin@example.com'
ON CONFLICT (user_id, role) DO NOTHING;
```

### Voir tous les admins
```sql
SELECT 
    u.email,
    ur.role,
    ur.created_at
FROM auth.users u
JOIN public.user_roles ur ON ur.user_id = u.id
WHERE ur.role = 'admin';
```

### Retirer le rôle admin d'un utilisateur
```sql
DELETE FROM public.user_roles
WHERE user_id = (SELECT id FROM auth.users WHERE email = 'utilisateur@example.com')
AND role = 'admin';
```

## ⚠️ Important

- **Ne partagez jamais** l'accès admin avec des personnes non autorisées
- **Testez toujours** après avoir attribué un nouveau rôle
- **Sauvegardez** la liste des admins dans un endroit sécurisé
- Le fichier `CREATE_ADMIN_TABLES.sql` peut être réexécuté sans danger (il utilise IF NOT EXISTS)

## 🆘 Problèmes?

Si vous rencontrez des erreurs:

1. **"function has_role does not exist"**
   - Le script SQL n'a pas été exécuté complètement
   - Re-exécutez le fichier `CREATE_ADMIN_TABLES.sql`

2. **"Accès refusé" pour le président**
   - Vérifiez que le rôle a bien été attribué (utilisez la commande "Voir tous les admins")
   - Vérifiez que l'email correspond exactement (sensible à la casse)

3. **Le dashboard ne charge pas**
   - Vérifiez la console du navigateur (F12)
   - Assurez-vous que l'edge function `paystack-transactions` est déployée
