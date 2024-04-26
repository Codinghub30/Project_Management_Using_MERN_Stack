import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'; 

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDb is Connected');
})
.catch((err) => {
    console.log(err);
})
// project Password

app.use("/api/user", userRoutes); //We are using get in userRoute
app.listen(4001, () => {
    console.log("Server is running on port 4001");
})

