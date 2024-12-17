import express from "express";
import { getAIResponse } from "../controllers/controllers.ai";

const router = express.Router();

router.post("/", getAIResponse);
router.post("/reprompt", getAIResponse);

export default router;
