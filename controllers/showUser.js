const User = require('../models/User')


const showUser = async (req,res)=>{
    let id = req.userId
    let user = await User.findOne({_id : id})
    if(user){
        return res.json({name :user.name,email : user.email, userName : user.userName});
    }
    return res.json(null)
}
module.exports = showUser