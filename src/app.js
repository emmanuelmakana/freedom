//express module
const express = require("express");

const app = express();

//routes
app.get("/", (req, res) => {
  res.send("We are live guys :)");
});
//How do we start the server?
app.listen(8000);
