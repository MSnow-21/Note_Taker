const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');

const app = express();

//Initial Port
const PORT = process.env.PORT || 8080;

// Data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


//Static route used for getting css file

app.use(express.static(path.join(__dirname, 'public')));

// app.get("/assets/js/index.js", function(req, res) {
//     res.sendFile(path.join(__dirname, "public/assets/js/index.js"));
// });

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes',(req,res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));

});

// app.get('/index', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })

//determining if this path is required as well
// app.get('/api/notes',(req,res) => {
//     res.sendFile(path.join(__dirname, 'api/notes.html'));

// });


//testing object db.json parsing
//confirmed that db is being loaded by require
//console.log(db);

const fileDB = fs.readFileSync('./db/db.json');

const fileData = JSON.parse(fileDB);

console.log(fileData); // returning the object

// let newDB = JSON.parse(db);
// console.log(newDB);


//API Routes
// app.get("/api/notes", (req,res) =>{
//     res.sendFile(path.join((__dirname,"./db/db.json")))
//     // let fileDB = fs.readFileSync(db,'utf-8');
//     // let fileData = JSON.parse(fileDB);
//     // res.json(fileData);
//     // // return res.json(db)
//     // // res.json({title:"Test Title",text:"Test text"})
// })

// Get for /api/notes

app.get('/api/notes', (req,res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'));
    // new line
    return res.json(db);
})

// Post for /api/notes
app.post('/api/notes', (req,res) =>{
    const note = req.body;

    console.log(note);

    //new for note id
    note.id = note.title.replace(/\s+/g, "").toLowerCase();
    console.log(note.id);

    //push db to
    db.push(note);
    res.json(note);
});

// Get for ids
// testing

app.get('/api/notes/:id', (req,res) =>{
    const chosen = req.params.id
    console.log(chosen);
    console.log(db);

    for (var i=0; i< db.length; i++){
        if(chosen === db[i].id){
            return res.json(db[i]);
        }
    }
    return res.json(false);
})

//delete for ids
//testing

app.delete('api/notes/:id', (req,res)=>{
    const delnote = note.id
    console.log(delnote);
    return res.json(delnote);
})



//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});

