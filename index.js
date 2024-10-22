const express=require('express');
const app=express();
const expresslayouts=require('express-ejs-layouts');
const indexrouter=require('./routes/index');
const mongoose=require('mongoose');
require('dotenv').config();



app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('layout','layouts/layout');
app.use(expresslayouts);
app.use(express.static('public'));


mongoose.connect(process.env.database_url)
const db=mongoose.connection
db.on('error',error=>{
    console.error(error);
})
db.once('open',()=>{
    console.log('db connected');
})

app.use('/',indexrouter);




app.listen(process.env.PORT||3000,()=>{
    console.log(`server is running at port`)
})

