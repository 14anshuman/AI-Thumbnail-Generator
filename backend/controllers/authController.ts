import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.ts";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // 1. Validation
    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // 2. Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    req.session.isLoggedIn=true;
    req.session.userId=user._id;

    // 5. Response (never send password)
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        
      },
    });
  } catch (error:any) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
};




export const loginUser=async(req:Request, res:Response)=>{
       try{


        const {  email, password } = req.body;

    // 1. Validation
    if ( !email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // 2. Check existing user
    const existingUser= await User.findOne({ email }).select("+password");
    if (!existingUser) {
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }

    const isPasswordCorrect=await bcrypt.compare(password,existingUser.password)    
     
    if(!isPasswordCorrect){
        res.status(400).json({ message: "Invalid  password" });
      return;

    }

    req.session.isLoggedIn=true;
    req.session.userId=existingUser._id;



    



    // 5. Response (never send password)
    res.status(201).json({
      message: "Login Successful",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
        
      },
    });

       }catch (error:any) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
}


export const logoutUser=async(req:Request, res:Response)=>{
  req.session.destroy((error:any)=>{
    if(error){
      console.log(error)
      return res.status(500).json({message:error.message})
    }
  })
  return res.json({message:'Logout successful'})
}



export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.session;
    // console.log(userId);
    

    if (!userId) {
      return res.status(401).json({
        user: null,
        message: "Not authenticated",
      });
    }

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        user: null,
        message: "User not found",
      });
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.error("Verify user error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};


