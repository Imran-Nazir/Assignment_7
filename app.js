const express = require('express');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');


const app = new express();
const router = require("./src/Routes/api");


//Security Middleware
app.use(cors());
app.use(mongoSanitize());
app.use(hpp());
app.use(helmet());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 //limit each IP to 100 requests per windowMs
})
app.use(limiter);

//Using api router
app.use("/api", router);
app.use((req, res)=>{
    res.status(404).json({status:"error", data:"Not Found"});
});


module.exports = app;