const Note = require("../models/Notes")

const createNewNote =  async (req,res)=>{
    const {title,description,tag} = req.body
    const user = req.userId
    try {
        // if the note already exists 
        let note = await Note.findOne({title: title})
        if(note){
            return res.status(200).send({msg:'note already exists'})
        }
        // creating new notes
        note = await  Note.create({user,title,description,tag})
        res.json(note)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
}
module.exports = createNewNote