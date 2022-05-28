const Note = require("../models/Notes")

const updateNote = async (req,res)=>{
    const {title,description,tag} = req.body
    try {
        // wheather the note exists 
        console.log(req.params.id)
        let note = await Note.findById(req.params.id)
        if(!note){
            return res.status(200).send("not found")
        }
        console.log(note)
        // the user is same the owner of the notes
        console.log(req.userId)
        console.log(note.user.toString())
        if(note.user.toString() !== req.userId){
            return res.status(401).send("not allowed")
        }
        const newNote = {}
        if(title) {newNote.title = title}
        if(description) {newNote.description = description}
        if(tag) {newNote.tag = tag}

        note = await Note.findByIdAndUpdate(req.params.id,{$set: newNote},{new: true})
        res.json({note})
    } catch (error) {
         console.error(error.message);
        res.status(500).send("some error occured")
    }

}
module.exports = updateNote