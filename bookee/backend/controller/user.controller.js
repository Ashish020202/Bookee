import { createConnection } from "mongoose";
import User from "../models/user.model";

export const signup = (req,res) =>{
    try{ 
    const {fullname,email,password} = req.body;
    const user = User.findOne({email});
    if(user){
        return res.status(400).json({mssg:"User already exist"});
    }

    const createdUser = new User({
        fullname,
        email,
        password,
    })

    createdUser.save();
    res.status(200).json({mssg:"User Created Sucessfully"});
    }catch(error){
        console.log("error"+error.message);
        res.status(500).json({mssg:"Internal Server error"});
        
    }


}