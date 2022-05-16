const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// jwt token 
const JWT_TOKEN = 'aritraisop'

const createUser = async (req, res) => {
  try {
    //  if the user already exists 
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ "error": "sorry a user already exists with this email" })
    }
    // encrypting the password
    let salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    // creating new user 
      user = await User.create({
      name: req.body.name,
      password: secPassword,
      email: req.body.email,
      userName: req.body.userName,
    })
    // creating json token 
    const data = {
      user: {
        id: user.id,
      }
    }
    const token = jwt.sign(data,JWT_TOKEN)
    return res.json({token});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured")
  }
}
module.exports = createUser