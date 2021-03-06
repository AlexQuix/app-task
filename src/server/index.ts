import 'regenerator-runtime';
import 'core-js';

import express from "express";
import path from "path";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();


// INITIALIZERS
const app = express();


// SETTINGS
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// MIDDLEWARE
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());


//ROUTES
import pages from "./routes/index";
import restAPI from './routes/restapi';
app.use(pages);
app.use("/api", restAPI);


app.listen(app.get("port"), ()=>{
    console.log("Server conected in the port " + app.get("port"));
});