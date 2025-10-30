const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hannah Birch');
});

app.listen(PORT, () => {
  console.log(`Web Server is listening at port ${PORT}`);
});