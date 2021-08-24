const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(process.env.APP);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
