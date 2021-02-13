//Loading data

const noteData = require('../db/db.json');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req, res) => {
        // test to see how response works
        res.send('Got a post request');
    });

    app.delete('/api/notes/:id', (req, res) => {
        // test to see how response works
        res.send('Got a delete request at this id')
    });
};
