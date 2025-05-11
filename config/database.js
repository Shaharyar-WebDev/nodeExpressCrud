import mongoose from 'mongoose';

const connectDB = async () => {

 mongoose.connect('mongodb://127.0.0.1:27017/contact').then(()=>{
console.log("DB connnected!");
});

}

export default connectDB;


