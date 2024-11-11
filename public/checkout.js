// This is your test publishable API key.
const stripe = Stripe("pk_live_51PuZw1FeZszO3OaWHqs54NUtXMSomib5Xyr8XNqKRluWLQ5NpTe4M9rDZsrsbrzmhL35KcL330MllqX6e6lCuylJ00DWA0b81z");

// The items the customer wants to buy
const items = [{ id: "xl-tshirt", amount: 1000 }];

let elements;


initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await  fetch("https://tourmaline-sopapillas-e8a4dc.netlify.app/api/payments/create-payment-intent", {
      method: "POST",
    })
        
    const { clientSecret } = await response.json();
    console.log('clientSecret', clientSecret);
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret
  });

  // Mount Checkout
  await checkout.mount('#checkout');
}
// const response = await fetch("http://localhost:3000/api/payments/create-payment-intent", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     "amount": 90000,
//     "country": "CN"
//   }),
// });
// const { clientSecret, dpmCheckerLink } = await response.json();