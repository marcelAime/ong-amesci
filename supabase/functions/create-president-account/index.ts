import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Créer un client Supabase avec les privilèges admin
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    console.log('Vérification si le compte président existe déjà...');

    // Vérifier si l'utilisateur existe déjà
    const { data: existingUsers, error: checkError } = await supabaseAdmin.auth.admin.listUsers();
    
    if (checkError) {
      console.error('Erreur lors de la vérification:', checkError);
      throw checkError;
    }

    const presidentExists = existingUsers.users.some(
      user => user.email === 'contact@ong-ames-ci.org'
    );

    if (presidentExists) {
      console.log('Le compte président existe déjà');
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Le compte président existe déjà',
        alreadyExists: true
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Création du compte président...');

    // Créer l'utilisateur président
    const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email: 'contact@ong-ames-ci.org',
      password: 'RTpIp4SUwUMV6ldGxcucAw==',
      email_confirm: true, // Auto-confirmer l'email
      user_metadata: {
        role: 'president',
        name: 'Président AMES-CI',
        full_name: 'Président AMES-CI'
      }
    });

    if (createError) {
      console.error('Erreur lors de la création:', createError);
      throw createError;
    }

    console.log('Compte président créé avec succès:', newUser.user?.id);

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Compte président créé avec succès',
      userId: newUser.user?.id,
      email: newUser.user?.email
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erreur:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      success: false,
      error: 'Erreur lors de la création du compte: ' + errorMessage 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
