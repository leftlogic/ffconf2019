const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const { config } = require('./package.json');
const { outputFolder } = config;

app.use('/', express.static(`${__dirname}/${outputFolder}`));

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log(`Ready on http://localhost:${port}`);
});
