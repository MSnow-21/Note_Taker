const express = require('express');

const app = express();

//Initial Port
const PORT = process.env.PORT || 8080;

// Data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Router

//require('route for api')(app);
//require('route for html')(app);

//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});

