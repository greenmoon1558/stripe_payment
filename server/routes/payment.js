const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripeChargeCallback = require("./stripeCharge");
module.exports = app => {
  app.get("/", (req, res) => {
    res.send({
      message: "Hello Stripe checkout server!",
      timestamp: new Date().toISOString()
    });
  });
  app.post("/", (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd"
    };
    stripe.charges.create(body, stripeChargeCallback(res));
  });
  return app;
};
