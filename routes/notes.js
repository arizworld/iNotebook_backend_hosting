const express = require('express');
const getUser = require('../middleware/getUser');
const validateNote = require('../validateNote');
const Note = require('../models/Notes');
const createNewNote = require('../controllers/createNewNote');
const updateNote = require('../controllers/updateNote');
const deleteNote = require('../controllers/deleteNote');
const router = express.Router();
// get all notes
router.get('/fetchallnotes',getUser,async (req,res)=>{
    const notes = await Note.find({user : req.userId})
    res.json(notes);
})
// create note 
router.post('/createnewnote',validateNote,getUser,createNewNote)
// update notes
router.put('/updatenote/:id',getUser,updateNote)
// delete notes 
router.delete('/deletenote/:id',getUser,deleteNote)
module.exports = router;