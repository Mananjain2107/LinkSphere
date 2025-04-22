import express from "express";
import {createServer} from "node:http";
import connectToSocket from "./controllers/socketManager.controller.js";

import {Server} from "socket.io";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();

const app=express();
const server=createServer(app);// HTTP server using the express app
const io=connectToSocket(server);// Initialize socket.io on the HTTP server

app.set("port",(process.env.PORT || 8000));
app.use(cors());// Middleware to allow cross-origin requests
app.use(express.json({limit:"40kb"}));// Middleware to parse incoming JSON requests (limited to 40kb size)
app.use(express.urlencoded({limit:"40kb",extended:true}));// Middleware to parse URL-encoded data, also limited to 40kb


const start = async () => {
    const connectionDb = await mongoose.connect(process.env.MONGODB_URL);

    console.log("Connected to Database")
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}


start();