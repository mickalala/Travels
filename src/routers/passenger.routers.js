import { Router } from "express";
import { getPassengersAndTravels } from "../controllers/passenger.controllers.js";

const passengerRouter= Router()

passengerRouter.get("/passengers/travels",getPassengersAndTravels)

export default passengerRouter;