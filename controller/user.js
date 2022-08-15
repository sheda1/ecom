
const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const signup = 
 async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // user existence
        let user =  await User.findOne( { where : { email : email}})
        if(user){
            return res.status(400).json({ msg: "User already exists" })
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        
        await User.create({ name, email, password: hash })
        res.status(201).json({msg: "New user created"})
    } catch (err) {
        res.status(403).json(err)
    }
}
const login = async (req, res) => {
    const {email, password} = req.body;
    try{

        // user existence
        let user = await User.findOne({ where: { email: email} });
        if(!user){
            return res.status(400).json({ errors: [{msg: "Invalid Credentials"}]})
        }
         
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ msg: "Invalid Credentials"})
        }
        const token = jwt.sign(
            user.id, process.env.SECRET_TOKEN
            )
        res.json({ token: token })
    }catch(err){
        console.log(err)
        res.status(500).send("server error23")
    }
}
module.exports = {
    signup, 
    login
}