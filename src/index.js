require('dotenv').config()
const express = require("express");
const cors = require("cors");
const calculator = require("./calculator");
const path = require("path");
const router = express.Router();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(express.static(__dirname + "/client"));

router.get("/", (_, res) => {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

router.post("/api/calc", (req, res) => {
  const { equation } = req.body;
  res.send({ equation, result: calculator(equation) });
});

app.use("/", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
