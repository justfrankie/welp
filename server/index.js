const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', express.static(path.join(__dirname, '/../client/public')))
app.use('/api', router)


app.listen(port, () => console.log(`Successfully connected to Welp! on http://localhost:${port}`)) 