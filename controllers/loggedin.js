
const loggedin = (req,res)=>{
    res.send({msg: `${req.userId} has logged in`})
}
module.exports = loggedin