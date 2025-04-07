import express from "express";
import { employerGetAllApplication, jobSeekerDeleteApplication, jobSeekerGetAllApplication, postApplication } from "../controllers/applicationController.js";
import {isAuthorized} from "../middlewares/auth.js"

const router = express.Router();

router.post("/postapplication", isAuthorized, postApplication);
router.get("/jobseeker/getAll", isAuthorized, jobSeekerGetAllApplication);
router.get("/employer/getAll", isAuthorized, employerGetAllApplication);
router.delete("/delete/:id", isAuthorized, jobSeekerDeleteApplication);

export default router;