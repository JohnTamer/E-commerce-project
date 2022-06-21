const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  // eslint-disable-next-line indent
  // eslint-disable-next-line max-len
  "sk_test_51LCHFQBxFpc2KRMYMKvFqIZiGGjgdwC7VjU351ezIeMjDv0IN4hagHbueVQke4afdzOIWvzRUCa9moTniTToajJK00kXcGPCYk"
);
// API

// App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment total", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// endpoint
// http://localhost:5001/johnzone-ee4b3/us-central1/api
