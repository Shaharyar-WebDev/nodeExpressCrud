import express from 'express';
import connectDB from './config/database.js';
import contactRoutes from './routes/contactRoutes.js';

//Database connection
connectDB();

const app = express();

const port = 3000;

app.listen(port, ()=>{
console.log("SERVER STARTED: " + port)
});

//Middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static('public'));

//Routes
app.use(contactRoutes);