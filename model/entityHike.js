module.exports = class Hike {
    constructor(title, description, difficultyLevel) {
        this.title = title;
        this.description = description;
        this.difficultyLevel = difficultyLevel;
    }
};


exports.makeHike = (title, description, difficultyLevel) => {
    return {
        title: title,
        description: description,
        difficultyLevel: difficultyLevel,
    }
}