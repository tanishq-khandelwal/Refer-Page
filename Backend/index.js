import express from "express"
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import referalRoutes from "./routes/referal.routes.js"


dotenv.config();
const app=express();
app.use(morgan("dev"));

app.use(express.json());


app.use(
    cors({
      origin: ["http://localhost:5173", "*","https://refer-page-eight.vercel.app"],
      credentials: true,
      httpOnly: false,
      optionSuccessStatus: 200,
      sameSite: "None",
      secure: true,
      methods: "GET, POST, PUT, DELETE", // Specify the allowed HTTP methods
      allowedHeaders: "Content-Type, Authorization",
      cookie: {
        secure: true,
        sameSite: "None",
      },
    })
  );
app.use("/ping",(req,res)=>{
    res.send("pong");
})

app.use("/api/v1",referalRoutes);
export default app;
