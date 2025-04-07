import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
//middleware
dotenv.config({});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send("hii")
})
const corsOptions = {
  origin: "http//localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
const PORT = 3000 //process.env.PORT || 3000;

app.use("/api/v1/user",userRoute)
app.listen(PORT, () => {
  connectDB();
  console.log(`server running on port ${PORT}`);
});
