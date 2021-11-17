const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');



//GET route for retrieinvg all the notes; 
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for NEW notes 
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a tip`);
    console.log(req.body);


    const { title, text, id } = req.body;

    if (req.body) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        }

        readAndAppend(newNote, './db/db.json');
        res.json('Note added!');
    } else {
        res.error('Error in adding note!');
    }
});
module.exports = notes