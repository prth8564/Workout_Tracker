import { Request,Response,NextFunction } from "express/index";
import Jwt from 'jsonwebtoken';
const { verify } = Jwt;

export function authenticate(req:Request,res:Response,next:NextFunction){
    const authHeader:string | undefined = req.headers.authorization;
    if(!authHeader){
        res.status(401).json({"message":"auth Token not present"});
        return;
    }
    const authToken:string = authHeader.split(' ')[1];
    verify(authToken,"secret",(err,decoded) => {
        if (err) {
            res.status(403).send('Invalid token');
            return;
          }
        if(typeof decoded === 'object' && decoded != null){
            req.user = decoded;
        }
        else{
            res.status(403).send("Invalid token structure");
            return;
        }
          
          next(); 
    })
}