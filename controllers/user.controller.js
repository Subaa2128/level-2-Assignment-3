import User from "../schema/users.schema.js";

//login creation 

export const logIn=async(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    try {
        const isExistingUser=await User.findOne({email})

        if(!isExistingUser) return res.json({error:{message:"user is not registered"}})

        if(isExistingUser.password!==password) return res.json({error:{message:"invalid password"}})

        res.json({result:isExistingUser})
    } catch (error) {
        console.log(error)
    }
}

//signup creation 

export const signUp=async(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const name=req.body.name
    try {
        const isExistingUser=await User.findOne({email})

        if(isExistingUser) return res.json({error:{message:"user is already registered"}})

        const data=await User.create({
            email,password,name
        })

        res.json(data)
    } catch (error) {
        console.log(error)
    }
}