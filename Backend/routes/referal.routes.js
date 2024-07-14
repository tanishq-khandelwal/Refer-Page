import { Router } from "express";
import { AddRefere } from "../controllers/refer.controller.js";

const router=Router();
router.post('/addReferal',AddRefere);

export default router;