import { Express, Router } from "express";
import { fireStationController } from "./FireStationController";

const route = Router();

route.get("/fireStation");
