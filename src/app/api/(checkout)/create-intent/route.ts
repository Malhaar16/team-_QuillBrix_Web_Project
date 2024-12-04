// /pages/api/create-intent.ts
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { totalPrice } = req.body;

    try {
      // Create a payment intent with the price from the cart
      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalPrice * 100, // Stripe requires amount in the smallest unit (cents)
        currency: "usd", // Set your currency here
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      console.log("Error creating payment intent:", err);
      res.status(500).json({ error: "Error creating payment intent" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
