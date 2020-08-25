"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./routes/index");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db_1 = require("./db/db");
const helmet = require("helmet");
dotenv.config();
var app = express(); //req instance of express
app.use(helmet());
//app.get("/", (req,res) => res.send("This is get express API"));
app.use(bodyParser.urlencoded({ extended: false })); //ENCODE THE PASSWORD
app.use(bodyParser.json());
app.use("/user", index_1.userRoute);
app.use("/category", index_1.categoryRoute);
app.use('/product', index_1.productRoutes);
app.listen(3000, () => {
    db_1.MongoConnect.connect().then(res => console.log("DB connected"));
    console.log("server running on port 3000");
});
