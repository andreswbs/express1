const { Router } = require("express");
const { makeHike} = require('./models/entities')
const { getHike, addHike} = require('./models/dataService')
const { makeSuccessOutput } = require('./view/apiResponses')

app =express()
app.post('/hike', () => {
    const {title, description, difficultyLevel = 'Easy'} = req.body
    const newHike = makeHike(title, description, difficultyLevel)
    addHike(newHike)
    req.render('pages/hikeAdded', {hike: newHike}))
app.post('/api/hike', (req, res) => {
    const {title, description, difficultyLevel = 'Easy'} = req.body
    const newHike = makeHike(title, description, difficultyLevel)
    addHike(newHike)
    res.status(201).send(newHike)
    //req.send(makeSuccessOutput('Hike added'))

})