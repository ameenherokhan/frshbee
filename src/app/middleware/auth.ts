import { Request,Response,NextFunction}from 'express';
import { verify } from 'jsonwebtoken';

export function validateUser(req:Request,res:Response,next:NextFunction) {
    const token : any = req.headers['x-access-token']
    const private_key = process.env.PRIVATEKEY || '';
verify(token,private_key,(err:any,decode:any) => {
    if(err) {
        res.status(401).json({status: 'failed',message: 'your session is expired' ,data:null})
    }else{
        req.body.userId = decode.id;
        next();
    }
})

}