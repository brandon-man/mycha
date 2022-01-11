const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        message: 'MERN Devs'
    });
});

const port = process.eventNames.port || 4000;
app.listen(port, () => {
    console.log(`Application is Running on ${port}`);
});