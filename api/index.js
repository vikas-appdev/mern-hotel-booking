import express, { response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from 'cookie-parser';

//const express = require('express')

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('connected to mongodb')
    } catch (err) {
        throw err
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDb disconnected")
})

// middleware
app.use(cookieParser())
app.use(express.json())

// app.use((req, res, next) => {
//     console.log("Middleware")
//     next()
// })

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    console.log("Inside error handler")

    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
})


// app.get("/", (req, res) => {
//     res.send("First Request");
// })

app.listen(8800, () => {
    connect()
    console.log('connected to backend');
})