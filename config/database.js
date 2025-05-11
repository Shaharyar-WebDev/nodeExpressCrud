import mongoose from 'mongoose';

const connectDB = async () => {

//  mongoose.connect('mongodb://127.0.0.1:27017/contact').then(()=>{
// console.log("DB connnected!");
// });

mongoose.connect("mongodb+srv://ahmedshaharyar00:ahmedshaharyar00@cluster0.zcjpybb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{

    console.log("DB connnected!");

});

}

export default connectDB;


