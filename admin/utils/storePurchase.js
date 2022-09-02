import { firebaseApp } from '../../admin/config/firebase'
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const { getFirestore } = require('firebase-admin/firestore')

const prod_to_credits = {
    "prod_MKWEVIr3xxkIOU": 50,
    "prod_MKWFbQeatsO7bO": 110,
    "prod_MKWF8YfIHDMGsY": 240
}

export const storePurchase = async (paymentIntent, email, status, session_id, stripe_customer, country) => {
    return new Promise(async (resolve, reject) => {
        let db = getFirestore(firebaseApp)
        stripe.checkout.sessions.listLineItems(
            session_id,
            { limit: 1 },
            async function(err, lineItems) {
                try {
                    if (!err) {
                        let productInfo = lineItems.data[0]
                        let productId = productInfo.price.product
                        let creditsToAdd = prod_to_credits[productId]
                        await db.collection('orders')
                        .add({
                            session_id,
                            email,
                            payment_intent: paymentIntent,
                            stripe_customer,
                            country,
                            payment_status: status
                        })

                        let newCredits = db.runTransaction(async (transaction) => {
                            let docRef = await db.doc(`users/${email}`)
                            let userObj = await transaction.get(docRef)
                            console.log(userObj.data().credits, creditsToAdd)
                            let credits = userObj.data().credits
                            transaction.update(db.doc(`users/${email}`), {
                                credits: (credits + creditsToAdd)
                            })
                            return credits + creditsToAdd
                        })

                        resolve(newCredits)
                    } else {
                        console.log("Error While Fetching Product From Stripe", err)
                        reject(err)
                    }
                }
                catch(e) {
                    reject(e)
                }
            }
        );
    })

    
}