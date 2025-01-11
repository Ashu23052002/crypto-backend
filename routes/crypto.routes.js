import { Router } from "express";
import getLatestData from "../cryptoController/crypto.controller.js";


const router = Router();

router.get("/stats",getLatestData);

export default router;