import { Request, Response } from "express";
import { FireStation } from "./FireStation";
import { FireStationGrabber } from "./FireStationGrabber";

export abstract class fireStationController {
  public static async getFireStationList(req: Request, res: Response) {
    const fireStationGrabber = new FireStationGrabber();
    const result = await fireStationGrabber.grab();
    res.status(200).send(result);
  }
}
