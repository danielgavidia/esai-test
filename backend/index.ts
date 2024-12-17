import express from "express";
import routesCards from "./routes/routes.cards";
import routesAI from "./routes/routes.ai";

const app = express();
const port = process.env.PORT || 3010;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/cards", routesCards);
app.use("/ai", routesAI);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
