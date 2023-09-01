const express = require('express');
const app = express();
const Stripe = require('stripe');

// Replace with your own secret key: https://dashboard.stripe.com/test/apikeys
const STRIPE_SECRET_KEY = 'sk_test_YourSecretKeyHere';
const stripe = new Stripe(STRIPE_SECRET_KEY);

// Middleware to parse JSON bodies
app.use(express.json());

// Define an endpoint to initiate a payment
app.post('/create-payment', async (req, res) => {
  try {
    const { mode, priceId } = req.body;
    const session = await stripe.checkout.sessions.create({
      mode,
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: 'localhost:4005/success', // Replace with your success URL
      cancel_url: 'https://localhost4007/cancel',   // Replace with your cancel URL
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 3000');
});

