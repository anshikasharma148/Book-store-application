const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//defining middleware

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

//mongodb config

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
