import { Request, Response } from "express/index";
import bcrypt from 'bcrypt';
import { insertUsers } from "../database/operations.js";
export async function signup(req:Request,res:Response){
    const {name,email,password}  = req.body;
    await bcrypt.hash(password,10,(err,hash) =>{
        insertUsers(name,email,hash);
    });
    res.status(200).json({"status":"done"});
}