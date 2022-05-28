const Note = require("../models/Notes")

const createNewNote =  async (req,res)=>{
    const {title,description,tag} = req.body
    const user = req.userId
    try {
        // creating new notes
        const note = await  Note.create({user,title,description,tag})
        res.json(note)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
}
module.exports = createNewNote