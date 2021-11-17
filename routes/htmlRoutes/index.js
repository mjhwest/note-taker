const path = require('path'); 
const router = require('express').Router(); 


// GET / will return to the index.html page 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//GET 'notes', will send you to the notes.html page.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router; 