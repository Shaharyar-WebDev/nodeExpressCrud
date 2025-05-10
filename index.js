import express from 'express';
import mongoose from 'mongoose';
import contact from './models/contact.js';
const app = express();

const port = 3000;

mongoose.connect('mongodb+srv://ahmedshaharyar00:ahmedshaharyar00@cluster0.zcjpybb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
console.log("DB connnected!");
});

app.listen(port, ()=>{
console.log("SERVER STARTED: " + port)
});

//Middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static('public'));

// Routes
app.get('/home', async (req, res)=>{

const contacts = await contact.find();

res.render('contacts', {contacts : contacts});
});

app.get('/add-contact', (req, res)=>{
res.render("add-contact");
});

app.post('/add-contact', async (req, res)=>{
await contact.create(req.body);
res.redirect("/home");
});

app.get('/update/:id', async (req, res)=>{
const singleContact = await contact.findById(req.params.id);
res.render('update-contact', {contact : singleContact });
});

app.post('/update/:id', async (req, res)=>{
await contact.findByIdAndUpdate(req.params.id, req.body);
res.redirect(`/home`);
});

app.get('/contact/:id', async (req, res)=>{

const singleContact = await contact.findById(req.params.id);
res.render("contact", {contact :singleContact});
});



app.get('/delete/:id', async (req, res)=>{
await contact.findByIdAndDelete(req.params.id);
res.redirect("/home");
});