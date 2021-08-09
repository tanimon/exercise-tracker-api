const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (_, res) => {
  res.sendFile(path.join(process.cwd(), '/views/index.html'));
});

module.exports = router;
