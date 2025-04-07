import express from "express";
import {isAuthorized} from "../middlewares/auth.js"
import { deleteJob, getAllJobs, getMyJob, getSingleJob, postJob, updateJob } from "../controllers/jobController.js";

const router = express.Router();

router.get("/jobs", getAllJobs);
router.post("/postjob", isAuthorized, postJob);
router.get("/myjob", isAuthorized, getMyJob);
router.put("/updatejob/:id", isAuthorized, updateJob);
router.delete("/deleteJob/:id", isAuthorized, deleteJob);
router.get("/:id", isAuthorized, getSingleJob);


export default router;
