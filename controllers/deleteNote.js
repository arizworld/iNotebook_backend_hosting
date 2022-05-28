const Note = require("../models/Notes")

const deleteNote = async (req,res)=>{
    try {
        // wheather the note exists 
        let note = await Note.findById(req.params.id)
        if(!note){
            return res.status(200).send("not found")
        }
        console.log(req.userId)
        console.log(note.user.toString())
        // the user is same the owner of the notes
        if(note.user.toString() !== req.userId){
            return res.status(401).send("not allowed")
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({message : "success", note : note})
    } catch (error) {
         console.error(error.message);
        res.status(500).send("some error occured")
    }

}
module.exports = deleteNote