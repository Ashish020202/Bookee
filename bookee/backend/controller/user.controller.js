import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup =async (req,res) =>{
    try{ 
    const {fullname,email,password} = req.body;
    const user =await User.findOne({email});
    if(user){
        return res.status(400).json({mssg:"User already exist"});
    }

    const hashPassword =await bcryptjs.hash(password,10);

    const createdUser = new User({
        fullname:fullname,
        email:email,
        password:hashPassword,
    })

    await createdUser.save();
    res.status(200).json({mssg:"User Created Sucessfully",user:{
        _id:createdUser._id,
        fullname:createdUser.fullname,
        email:createdUser.email,
    }});
    }catch(error){
        console.log("error"+error.message);
        res.status(500).json({mssg:"Internal Server error"});
        
    }

}

export const login =async (req,res) => {
     try{
        const {email,password} = req.body;
        const user =await User.findOne({email});
        if (!user) {
            return res.status(400).json({ mssg: "Invalid credentials" });
        }
        const matchPass =await bcryptjs.compare(password,user.password);

        if(!matchPass){
            return res.status(400).json({mssg:"Invaild credentials"});
        } else{
            res.status(200).json({
                mssg:"login sucessfully",
                user:{
                    id:user.id,
                    fullname:user.fullname,
                    email:user.email,

                }
            })
        }
     }catch(error){
        console.log("error"+error.message);
        res.status(500).json({mssg:"Internal Server error"});
        
     }
}