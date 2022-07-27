import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name :{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String}
})

const User = mongoose.model("user",usersSchema)

export default User