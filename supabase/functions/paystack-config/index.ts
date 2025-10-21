import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Rate limiting map
const rateLimits = new Map<string, { count: number; resetTime: number }>();

const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const limit = rateLimits.get(identifier);
  
  if (!limit || now > limit.resetTime) {
    rateLimits.set(identifier, {
      count: 1,
      resetTime: now + 60000 // 1 minute window
    });
    return true;
  }
  
  if (limit.count >= 10) { // Max 10 requests per minute
    return false;
  }
  
  limit.count++;
  return true;
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(clientIp)) {
      return new Response(JSON.stringify({ 
        error: 'Trop de requêtes. Veuillez réessayer dans une minute.' 
      }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    // Retrieve Paystack public key from environment
    const PAYSTACK_PUBLIC_KEY = Deno.env.get('PAYSTACK_PUBLIC_KEY_LIVE');
    
    if (!PAYSTACK_PUBLIC_KEY) {
      console.error('Paystack public key not configured in environment');
      return new Response(JSON.stringify({ 
        error: 'Paystack key not configured' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ 
      publicKey: PAYSTACK_PUBLIC_KEY 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in paystack-config function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      error: 'Configuration error: ' + errorMessage 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});