import express from "express";

const app = express();

// get, post, delete, put route in Express. The base route
// url will be called “numbers”

//In each response send back a string “success using (method name)”.

const endppoint = "/numbers";

app.get(endppoint, (req, res) => {
  res.send("success using GET");
});
app.post(endppoint, (req, res) => {
  res.send("success using POST");
});
app.delete(endppoint, (req, res) => {
  res.send("success using DELETE");
});
app.put(endppoint, (req, res) => {
  res.send("success using PUT");
});

app.listen(3000, () => {
  console.log("Server up on port 3000");
});
