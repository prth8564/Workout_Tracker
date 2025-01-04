import { Request,Response,NextFunction } from "express/index";
import Jwt , {JwtPayload} from 'jsonwebtoken';
const { verify } = Jwt;
interface RequestWithUser extends Request {
    user:JwtPayload;
}
export async function authenticate(req:RequestWithUser,res:Response,next:NextFunction){
    const authHeader:string | undefined = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({"message":"auth Token not present"});
    }
    const authToken:string = authHeader.split(' ')[1];
    verify(authToken,"secret",(err,decoded) => {
        if (err) {
            return res.status(403).send('Invalid token');
          }
          req.user = decoded;
          next(); 
    })
}

