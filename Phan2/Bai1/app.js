const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Xin chào GGDuck!');
});

app.listen(port, () => {
  console.log(`Ứng dụng đang lắng nghe tại http://localhost:${port}`);
});