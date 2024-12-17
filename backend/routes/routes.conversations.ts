import express from "express";
import { getConversations, postConversation } from "../controllers/controllers.conversations";

const router = express.Router();

router.get("/", getConversations);
router.post("/", postConversation);

export default router;
