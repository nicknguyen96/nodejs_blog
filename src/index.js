const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { create } = require('express-handlebars');

const hbs = create({
    // this feature helps change the extendtion from default '.handlebars' to '.hbs'
    extname: 'hbs',
    // define some helper function here and could be use in the layout
    helpers: {
    }
})


const app = express();
const port = 3000;

// Template Engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// create static path
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// render base on request
app.get('/', (req, res) => {
    res.render('home', {
        layout: 'main'
    });
});

// run app
app.listen(port, () => {
    console.log(`example running on port ${port}`)
})