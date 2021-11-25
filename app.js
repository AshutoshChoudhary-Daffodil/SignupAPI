const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();


//db connection//
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("db connected successfully");
});

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error : ${err.message}`);
});



//middlewares
app.use(morgan("dev"));

app.use(bodyParser.json());



//routes

const routes = require('./routes/apiRoutes.js');

app.use("/",routes);




console.log("server running");

const Port = process.env.PORT;
app.listen(Port);
