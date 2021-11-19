// based off helps folder from mini project. 

const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

//need to add in how to EDIT file and how to DELETE file here! !!!

// DELETE  ROUTE here //testing 
//added line 41-56 and deletenote in module.exports 

function deleteNote(id){
    fs.readFile(path.join(__dirname, "../db/db.json"), function(err, data){
      var json = JSON.parse(data);
      for (let i = 0; i < json.length; i++){
        if (json[i].id === id){
          json.splice(i, 1);
        }
      };
  
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(json), function(err){
        if (err){
          console.error(err);
        }
      });
    });
};


module.exports = { readFromFile, writeToFile, readAndAppend, deleteNote};

// module.exports = { readFromFile, writeToFile, readAndAppend };