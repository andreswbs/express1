const express = require('express')
const app = express()
const port = process.env.PORT || 5000

function greeting(req, res) {
    const object = {
        greeting: "Hello again"
    }
    return res.json(object)
}

app.get('/', (req, res) => {
    return res.send('Hello world!')
})

app.get('/greeting', greeting)

app.listen(port, ()=> console.log(`Server listening on port ${port}`))