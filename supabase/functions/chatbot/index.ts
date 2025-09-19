import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

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
    const { message } = await req.json();
    
    if (!message) {
      throw new Error('Message is required');
    }

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured');
    }

    console.log('Received message:', message);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `Tu es l'assistant virtuel de l'ONG Santé basée à Abidjan, Côte d'Ivoire. Voici les informations importantes sur l'ONG:

MISSION: Faire bénéficier aux populations des soins de rêve à moindre coût
CRÉATION: 15 mars 2018
LOCALISATION: Abidjan, Côte d'Ivoire
CATÉGORIE: Santé/beauté

SERVICES PROPOSÉS:
- Consultations médicales générales à prix abordable
- Équipements médicaux modernes et de qualité
- Soins spécialisés avec une équipe qualifiée
- Programmes de prévention et sensibilisation
- Soins d'urgence 24h/24

HORAIRES:
- Lun - Ven: 7h00 - 19h00
- Sam - Dim: 8h00 - 18h00
- Urgences disponibles 24h/24

CONTACT:
- Téléphone: +225 0759950823
- Email: contact@ongsante.ci
- Urgences: +225 0759950823
- WhatsApp: +225 0759950823

Tu dois:
1. Répondre aux questions sur l'ONG de manière informative et bienveillante
2. Expliquer la mission de rendre les soins accessibles à tous
3. Donner les informations sur les services, horaires, contact
4. Si quelqu'un demande comment aider ou faire un don, l'encourager chaleureusement et lui dire qu'il peut faire un don via le site
5. Toujours répondre en français
6. Être empathique et professionnel
7. Ne jamais générer d'erreur, toujours donner une réponse utile

Réponds de manière concise et utile.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', response.status, response.statusText);
      throw new Error('Failed to get response from OpenAI');
    }

    const data = await response.json();
    console.log('OpenAI response received');
    
    const reply = data.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chatbot function:', error);
    return new Response(JSON.stringify({ 
      error: 'Une erreur est survenue. Notre équipe est là pour vous aider au +225 0759950823' 
    }), {
      status: 200, // Return 200 to avoid showing error to user
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});