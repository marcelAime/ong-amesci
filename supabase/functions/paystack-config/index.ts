import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
    const PAYSTACK_PUBLIC_KEY = Deno.env.get('PAYSTACK_PUBLIC_KEY') || 'pk_test_ec344c48c34a15f8c96e299c71b3078ee85d0e9f';
    
    console.log('Paystack key check:', PAYSTACK_PUBLIC_KEY ? 'Key found' : 'Key not found');
    
    if (!PAYSTACK_PUBLIC_KEY) {
      console.error('Paystack public key not configured in environment');
      return new Response(JSON.stringify({ 
        error: 'Paystack key not configured' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Returning Paystack key');
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