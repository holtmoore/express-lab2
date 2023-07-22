const express = require('express')
const app = express()
const answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/greeting', (req, res)=>{
    res.send('Hello, stranger')
})

app.get('/greeting/:name', (req, res)=>{
    stranger = req.params.name
    res.send(`what's, ${stranger}`)
})

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    console.log(req.params)
    res.send(`if the bill is $${req.params.total}, and you want to tip %${req.params.tipPercentage}`)
})

app.get('/magic/:question', (req, res) =>{
    let randomAnswer = answer[Math.floor(Math.random()*answer.length)]
    res.send(req.params.question+'?'+'<h2>Answer:</h2>'+`<h1>${randomAnswer}</h1>`)
    console.log(req.params)
})

//LEFT THIS HERE BUT ALSO PUT IN OWN DIRECTORY AND FILE
// app.get('/beer', (req, res) => {
//     res.send('99 bottles of beer on the wall' + '<h3><a href="/beer/98">take one down, pass it around</a></h3>');
// });
// app.get('/beer/:number_of_bottles', (req, res) => {
//     const numberOfBottles = parseInt(req.params.number_of_bottles);

//     if (numberOfBottles === 0) {
//         res.send('No more bottles of beer on the wall' + `<h3><a href="/beer">Start over</a></h3>`);
//     } else {
//         const nextNumber = numberOfBottles - 1;
//         res.send(`${numberOfBottles} bottles of beer on the wall` + `<h3><a href="/beer/${nextNumber}">Take one down, pass it around</a></h3>` + `<h3><a href="/beer">Start over</a></h3>`);
//     }
// });

app.listen(3000, () => {
    console.log('listening');
});
