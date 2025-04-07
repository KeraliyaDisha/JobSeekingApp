import applicationRouter from "./routes/applicationRouter.js"
import jobRouter from "./routes/jobRouter.js"
import userRouter from "./routes/userRouter.js"
import express from "express";

const routes = express.Router();

routes.use("/user", userRouter);
routes.use("/application", applicationRouter);
routes.use("/job", jobRouter);

export default routes;
