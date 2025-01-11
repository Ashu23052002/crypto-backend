import { Router } from "express";
import {getLatestData,findStandardDeviation} from "../controller/crypto.controller.js";


const router = Router();

router.get("/stats",getLatestData);
router.get("/deviation",findStandardDeviation)

export default router;