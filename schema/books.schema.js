import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    title :{type:String,},
    image:{type:String},
    price:{type:String},
    description:{type:String},
    categories:{type:String},
    author:{type:String},
})

const Book = mongoose.model("book",booksSchema)

export default Book