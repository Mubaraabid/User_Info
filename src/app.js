import express from "express";
import stdRouter from "./router/std.js";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";

connectDB();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(stdRouter);

app.listen(3900,()=>{
    
    console.log("listening on port 3900");
})
