const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql')
const myConnection = require('express-myconnection');
const app = express();


//import routes
const usersRoutes = require('./routes/users');


//Settings

app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'stoomcode',
    port: 3306,
    database: 'examen'
}, 'single'));




//Routes

app.use('/', usersRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting server
app.listen(app.get('port'), ()=>{
    console.log('<-------------------- [http://localhost:3000/] -------------------->');
     
});