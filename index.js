const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/soap', (req, res) => {
    res.send('Soap')
})

app.post('/rest', (req, res) => {
    res.send('rest')
})

app.listen(port, () => {
    console.log(`web-services app listening at http://localhost:${port}`)
})