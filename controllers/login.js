const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// jwt token 
const JWT_TOKEN = 'aritraisop'

const login = async (req, res) => {
    const {email,password} = req.body
    let success = false
    try {
      //  if the user already exists 
      let user = await User.findOne({email})
      if (!user) {
        return res.status(400).json({ success,"error": "Please try to login with correct credentials" })
      }
      const userPassword = user.password
      const passComp = await bcrypt.compare(password,userPassword);
      if (!passComp) {
        return res.status(400).json({ success,"error": "Please try to login with correct password" })
      }
      // creating json token 
    const data = {
      user: {
        id: user.id,
      }
    }
    const token = jwt.sign(data,JWT_TOKEN)
    success = true
    return res.json({success,token});
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send({success,error : "some error occured"})
    }
  }
  module.exports = login
