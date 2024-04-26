const express = require('express');
const cors = require('cors')
const bodyParser  = require('body-parser');
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

/**
 * db connection
 */
require('./db_connection')
require('./model/student')

app.use('/api', require('./routes/index'))


app.listen(4000, () => console.log('Server is running on port 4000'))