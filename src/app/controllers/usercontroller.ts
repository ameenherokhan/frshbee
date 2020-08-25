import { Request, Response, NextFunction, Errback } from "express";
import { User } from '../models/User';
import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export class UserController {

    static login(req: Request, res: Response, next: NextFunction) {
        User.findOne({ email: req.body.email }, (err: Errback, result: any) => { //angular form
            const private_key = process.env.PRIVATEKEY || '';
            if (err) {
                res.status(500).json({ status: 'failed', message: err })
            } else {
                if (result != undefined) {
                    if (compareSync(req.body.password, result.password)) {
                        const token = sign({id: result._id}, private_key,{expiresIn : '1h'})
                        res.json({ status: 'success', message: 'Login success' , data: token })
                    } else {
                        res.json({ status: 'failed', message: 'Username or password  is incorret' })
                    }
                } else {
                    res.json({ status: 'failed', message: 'Username or password  is incorret' })
                }
            }
        })
    }
    static registration(req: Request, res: Response, next: NextFunction) {
        const user = new User(req.body);
        User.create(user, (err: Errback, result: any) => {
            if (err) {
                res.status(500).json(
                    { status: 'failed', message: err }
                )
            } else {
                res.json({ status: 'success', message: 'Registration Successful!', data: result })
            }
        })
    }
    static updatedProfile(req: Request, res: Response, next: NextFunction) {
        const userId = req.body.userId;
        User.findByIdAndUpdate( userId, {
            $set:{
                firstName:req.body.firstName,
                lastName:req.body.lastName, 
                addressInfo: req.body.addressInfo
            }
            } ,(err:Errback,result: any) => {
            if(err){
                res.status(500).json({
                    status: 'failed' ,message: err
                })
            }else{
                res.json({ status: 'success', message: 'Profile Updated', data: null })
            }
        })
    }
    static getProfile(req:Request,res:Response,next:NextFunction) {
        const userId = req.body.userId;
        User.findById(userId, (err:Errback,result:any) => {
            if(err) {
                res.status(500).json({
                    status: 'failed',message: err
                })
            }else{
                res.json({status: 'success', message:'Profile', data: result})
            }
        })
    }
}