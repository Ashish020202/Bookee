import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import bookRoute from './routes/book.route.js'
import userRoute from './routes/user.route.js'

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;
const dburi = process.env.MongoDBUri;

try {
    mongoose.connect(dburi)
    console.log("connected to db");
} catch (error) {
    console.log("error:",error);
}

// app.get('/',(req,res)=>{
//     res.send("hello");
// })

app.use('/book',bookRoute);
app.use('/user',userRoute);

app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`);
})