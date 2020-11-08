const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


var data = {}

app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'keyboard cat'
}));

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/soap', (req, res) => {
    res.send('Soap')
})

app.post('/rest', (req, res) => {
    res.send('rest')
})

app.get('/info', (req, res) => {
    res.send({author: 24055})
})

app.get('/400', (req,res,next) => {
    res.send('Error! Name must be in range of 1 and 10 characters and contain only letters betweenn a-z.', 400);
})

app.post('/store', urlencodedParser, (req, res) => {
    users.
    res.send(req.body);
})

app.get('/hello/:name', (req, res) => {
    const regEx = /^([a-z]){1,10}$/gi;
    if (!regEx.test(req.params.name)) res.redirect('/400');
    else res.send('Hello, ' + req.params.name, 200)
})

app.listen(port, () => {
    console.log(`web-services app listening at http://localhost:${port}`)
})