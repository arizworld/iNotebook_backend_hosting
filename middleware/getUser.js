const jwt = require('jsonwebtoken');

// jwt token 
const JWT_TOKEN = 'aritraisop'

const getUser = (req,res,next)=>{
    const token = req.header('token')
    if(!token){
        return res.status(401).json({error : 'please use proper token'})
    }
    try {
        const data = jwt.verify(token,JWT_TOKEN)
        console.log(data);
        req.userId = data.user.id
    } catch (error) {
        return res.status(401).json({error : 'Internal Server'})
    }
    next()
}
module.exports = getUser