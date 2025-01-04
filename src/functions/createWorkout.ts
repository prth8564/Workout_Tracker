import { Request,Response } from "express/index";
import { insertWorkout } from "src/database/operations";

export async function createWorkout (req:Request,res:Response){
    res.json({"in here":"yes you are"});
    return;
}