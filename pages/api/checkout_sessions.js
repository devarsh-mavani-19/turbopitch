import { verifyUser } from '../../serverutils/verifyUser';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            let user = await verifyUser(req, res, null)
            let email = user.email
            const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: req.body.pricing,
                quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
            allow_promotion_codes: true,
            customer_email: email
            });
            res.redirect(303, session.url);
        }
        catch (err) {
            console.log("STRIPE ERROR ", err.message)
            res.status(err.statusCode || 500).json(err.message);
        }
    }
}

