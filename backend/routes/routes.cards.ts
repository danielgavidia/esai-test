import express from "express";
import { getCards, postCard } from "../controllers/controllers.cards";

const router = express.Router();

router.get("/", getCards);
router.post("/", postCard);

export default router;
