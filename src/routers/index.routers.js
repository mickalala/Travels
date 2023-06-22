import { Router } from "express";
import passengerRouter from "./passenger.routers.js";

const indexRouter= Router();

indexRouter.use(passengerRouter)

export default indexRouter