import { Request,Response } from "express/index";
import { insertWorkout } from "../database/operations";

export async function createWorkout (req:Request,res:Response):Promise<void>{
    res.json({"in here":"yes you are"});
    return;
}