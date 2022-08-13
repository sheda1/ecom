const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const sequelize = require('./util/database')

const user = require('./models/user');

const cors = require('cors');

const authRoutes=require('./routes/auth')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.use('/user',authRoutes);

sequelize.sync()
.then(()=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})
