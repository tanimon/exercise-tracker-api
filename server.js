const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const expressPino = require('express-pino-logger');
const logger = require('./utils/log');
const logMiddleware = expressPino({
  logger,
  serializers: {
    req: (req) => {
      return {
        method: req.method,
        url: req.url,
        body: req.raw.body,
      };
    },
    res: (res) => {
      return {
        status: res.statusCode,
      };
    },
  },
});

app.use(logMiddleware);

const indexRouter = require('./routes/index.route');
const apiRouter = require('./routes/api.route');

app.use('/', indexRouter);
app.use('/api', apiRouter);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
