import express from "express";
import { getAIPrompt } from "../controllers/controllers.ai";

const router = express.Router();

router.post("/", getAIPrompt);
router.post("/reprompt", getAIPrompt);

export default router;
