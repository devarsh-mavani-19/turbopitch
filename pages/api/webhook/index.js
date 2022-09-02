import { storePurchase } from '../../../admin/utils/storePurchase';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.WEBHOOK_SECRET;
const { buffer } = require('micro');

export const config = {
    api: {
      bodyParser: false,
    },
  };

export default async function handler(req, res) {
    const fulfillOrder = async (session) => {
        // TODO: fill me in
        console.log("Fulfilling order", session);
        try {
            await storePurchase(session.payment_intent, session.customer_email, session.status, session.id, session.customer, session.customer_details.address.country)
        } 
        catch(e) {
            console.log("CRITICAL ERROR", e)
        }
        
      }

    if (req.method === "POST") {
        const buf = await buffer(req);
        const payload = req.body;
        const sig = req.headers['stripe-signature'];
        console.log(sig)

        let event;

        try {
            event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
        } catch (err) {
            console.log(err)
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        // Handle the checkout.session.completed event
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            // Fulfill the purchase...
            fulfillOrder(session);
        }


        res.status(200).end();
    } else {
        res.status(404).end("OOPS!")
    }
}