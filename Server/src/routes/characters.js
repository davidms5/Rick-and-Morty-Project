import express from "express";
import { getCharById } from "../controllers/getCharById.js";
const router = express.Router();

router.get("/:id", getCharById);

export default router;
