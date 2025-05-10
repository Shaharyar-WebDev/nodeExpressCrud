import mongoose from 'mongoose';

const contactsSchema = mongoose.Schema({
first_name:{
type:String
},last_name:{
type:String
},
email:{
type:String
},
phone_number:{
type:String
},
address:{
type:String
}
});

const contact = mongoose.model("contacts", contactsSchema);

export default contact;