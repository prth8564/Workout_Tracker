import { Request, Response } from "express/index";
import { getUsers } from "../database/operations.js";
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken'
const {sign} = Jwt
export async function login(req:Request,res:Response){
    const {email,password} = req.body;
    const dbItem = await getUsers(email);
    await bcrypt.compare(password,dbItem.password_hash,(err,result)=>{
        if(err){
            console.log("Wrong password");
            res.status(400).json({"message":"Wrong password"});
            return;
        }
        if(result){
            const token = sign(dbItem,"secret",{expiresIn:300});
            res.status(200).json({"token":token});
            return;
        }
        else{
            res.status(400).json({"message":"Wrong password"});
            return;
        }
    })
    
    
}