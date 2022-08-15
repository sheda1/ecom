const express  = require("express")
const app = express()
const dotenv = require("dotenv")
const db = require('./database')
const User = require("./model/user")
const Expense = require("./model/expense")
const cors = require('cors')
// const Order = require("./model/order")
// const Forgotpassword = require("./model/passwordReset")
// const resetPassword = require('./routes/resetPassword')

dotenv.config()
app.use(express.json())
app.use(cors())


app.use('/user', require('./routes/user'))
app.use('/expense', require('./routes/expenses'))
// app.use("/password", resetPassword)

User.hasMany(Expense)
Expense.belongsTo(User)

// User.hasMany(Order)
// Order.belongsTo(User)

// User.hasMany(Forgotpassword);
// Forgotpassword.belongsTo(User);



PORT = process.env.PORT || 3000;
db.sync().then(() => {
    console.log("db connected..")
    app.listen(PORT)
})
.catch(err => {
    console.log(err)
})


