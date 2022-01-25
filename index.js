const express =require ('express');
const env=require('dotenv');

const app=express();
const bodyParser=require('body-parser');
const Mongoose=require('mongoose');
const userRout=require('./routs/user');



//environment variable
env.config();
//  mongodb+srv://root:<password>@cluster0.myvhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority 

Mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.myvhj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
        
    }
).then(()=>{
    console.log('Database connected')
})
app.use(bodyParser());
app.use('/api', userRout);




 app.listen(process.env.PORT, () =>{
     console.log(`Server is running on port ${process.env.PORT}`);
 })