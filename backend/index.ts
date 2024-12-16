import express from "express";
import routesCards from "./routes/routes.cards";

const app = express();
const port = process.env.PORT || 3010;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/cards", routesCards);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
