const express = require('express');
const app = express();

app.get('/beer', (req, res) => {
  res.send('99 bottles of beer on the wall' + '<h3><a href="/beer/98">take one down, pass it around</a></h3>');
});

app.get('/beer/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);

  if (numberOfBottles === 0) {
    res.send('No more bottles of beer on the wall' + `<h3><a href="/beer">Start over</a></h3>`);
  } else {
    const nextNumber = numberOfBottles - 1;
    res.send(`${numberOfBottles} bottles of beer on the wall` + `<h3><a href="/beer/${nextNumber}">Take one down, pass it around</a></h3>` + `<h3><a href="/beer">Start over</a></h3>`);
  }
});

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
