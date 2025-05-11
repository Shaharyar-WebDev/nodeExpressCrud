import express from 'express';
import contact from '../models/contact.js';

const router = express.Router();

// Routes
router.get('/home', async (req, res)=>{

const contacts = await contact.find();

res.render('contacts', {contacts : contacts});
});

router.get('/add-contact', (req, res)=>{
res.render("add-contact");
});

router.post('/add-contact', async (req, res)=>{
await contact.create(req.body);
res.redirect("/home");
});

router.get('/update/:id', async (req, res)=>{
const singleContact = await contact.findById(req.params.id);
res.render('update-contact', {contact : singleContact });
});

router.post('/update/:id', async (req, res)=>{
await contact.findByIdAndUpdate(req.params.id, req.body);
res.redirect(`/home`);
});

router.get('/contact/:id', async (req, res)=>{

const singleContact = await contact.findById(req.params.id);
res.render("contact", {contact :singleContact});
});



router.get('/delete/:id', async (req, res)=>{
await contact.findByIdAndDelete(req.params.id);
res.redirect("/home");
});

export default router;