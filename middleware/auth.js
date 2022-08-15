const jwt = require('jsonwebtoken');
const User = require('../model/user');

module.exports = (req, res, next) => {

    try {
        const token = req.header('x-auth-token');
        console.log(token);
        const userid = Number(jwt.verify(token, process.env.SECRET_TOKEN));
        User.findByPk(userid).then(user => {
            console.log(JSON.stringify(user));
            req.user = user;
            next();
        }).catch(err => { throw new Error(err)})

      } catch(err) {
        console.log(err);
        return res.status(401).json({success: false})
      }

}

