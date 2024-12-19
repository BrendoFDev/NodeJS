require('dotenv').config();
const express = require('express');
const pathResolver = require('path');
const router = require('./router');
const middleware = require('./src/middlewares/middleware');

const mongoose = require('mongoose');


const app = express();

mongoose.connect(process.env.connectionString)

.then(() => {
    app.emit('Conectado');
})
.catch(e => console.log(e));

const port = 3000;

//configuring server
app.use(express.urlencoded({extended:true}));
app.use(express.static(pathResolver.resolve(__dirname,'public')));
app.set('views',pathResolver.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');


// waiting to connect with mongoDb before running server
app.on('Conectado', ()=>{
    //executing in port
    app.listen(port, ()=> {
        console.log(`Rodando em: http://localhost:${port}`);
    });
});


//using router to maintain routes
app.use(router);