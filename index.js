import express from 'express';
import cors from 'cors';
import dotenv from'dotenv';
import "./db/db.js"
import route from "./routes/user.router.js"
import bookRoute from './routes/book.router.js'


dotenv.config()



const app = express();

app.use(cors());
app.use(express.json({limit:"10mb"}));

const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("heloo")
})

app.use("/users",route)

app.use("/book",bookRoute)



app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})


