import * as express from "express";
import { categoryRoute,productRoutes,userRoute } from './routes/index';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { MongoConnect } from './db/db';
import * as helmet  from 'helmet';


dotenv.config();
var app = express();//req instance of express
app.use(helmet())

//app.get("/", (req,res) => res.send("This is get express API"));
app.use(bodyParser.urlencoded({extended : false}));//ENCODE THE PASSWORD

app.use(bodyParser.json());

app.use("/user",userRoute);
app.use("/category", categoryRoute);
app.use('/product',productRoutes);

app.listen(3000,() => {
      MongoConnect.connect().then(res => console.log("DB connected"));
      console.log("server running on port 3000")
  });