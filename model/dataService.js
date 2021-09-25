const { makeHike } = require('./entityHike')


const hikes = [
]

module.exportsfunction addHike(hike) {
    hikes.push(hike)
}

module.exports function getHikes() {
    return [...hikes]
}

module.exports function getHike(id) {
    const hikeIndex = hikes.findIndex( //define callback)
    return hikes[hikeIndex]
}