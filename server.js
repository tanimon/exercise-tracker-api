const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const indexRouter = require('./routes/index.route');

app.use(cors());
app.use(express.static('public'));

app.use('/', indexRouter);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
