const express =require("express");
const morgan=require("morgan");
const cors=require("cors");

const app= express()
require('dotenv').config({
    path:'./config/index.env'
})

app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());


app.get('/',(req,res)=>{
    res.send("test route => home page");
})


app.use((req,res)=>{
    res.status(404).json({
        msg:'page not founded'})
})

const PORT=process.env.PORT

app.listen(PORT, ()=>{
    console.log(`App listining on port ${PORT}`)
})