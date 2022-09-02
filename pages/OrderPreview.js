import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import Button from "../src/elements/button/Button";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function OrderPreview() {

  let router = useRouter()
  let product = router.query['product']

  let auth = useSelector(state => state.auth)

    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
        }
    
        if (query.get('canceled')) {
        }
      }, []);

    const backPressed = () => {
      router.back()
    }

    return (
      <div className="container d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className=" d-flex justify-content-center align-items-center">
        <div className='card shadow p-5' style={{height: 'auto'}}>
          <div className="d-flex justify-content-center align-items-center">
            <BiArrowBack style={{cursor: 'pointer'}} onClick={backPressed} size={25}  />
            <h3 className="my-0 mx-2">{"Checkout"}</h3>
          </div>
          <div className="d-flex justify-content-between">
            <p>Basic Plan</p>
            <p>$5</p>
          </div>
          <form action="/api/checkout_sessions" method="POST">
            <section>
              <input type='text' name='idToken' value={auth.token} hidden />
              <button className="btn-default btn-icon" type="submit" role="link">
                Checkout
              </button >
            </section>
            
          </form>
        </div>
        </div>
        
      </div>
      );
}