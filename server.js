const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();

app.use(cors());
app.use(express.static('public'));

const expressPino = require('express-pino-logger');
const logger = require('./utils/log');
const logMiddleware = expressPino({ logger });

app.use(logMiddleware);

const indexRouter = require('./routes/index.route');

app.use('/', indexRouter);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
