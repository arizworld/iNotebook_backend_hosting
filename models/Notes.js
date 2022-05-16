const mongoose = require('mongoose')
const {Schema} = mongoose;

const notesSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default: 'General'        
    },
    date:{
        type: Date,
        default: Date.now,
        immutable: true
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
});
const Note = mongoose.model('note',notesSchema)
Note.createIndexes()
module.exports = Note