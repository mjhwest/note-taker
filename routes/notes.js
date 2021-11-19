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


    // const { title, text, id } = req.body;

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


//testing delete route 
//DELETE Route for Notes 

//added line 41 - 47
notes.delete("/api/notes/:id", function(req, res) {
    console.log("req params", req.params.id)
    const itemIndex = newNote.findIndex(({ id }) => id === req.params.id);
    if (itemIndex >= 0) {
      newNote.splice(itemIndex, 1);
    }
  });



// notes.delete('/notes/:id', (req, res) => {
//     const noteID = req.params.id;
//     deleteNote(noteID);
//     res.end();
// })

module.exports = notes