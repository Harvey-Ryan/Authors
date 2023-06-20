
//Import our Controllers
const authorController = require('../controllers/author.controller');

//Declare our routes

module.exports = (app) => {
    //Create author route
    app.post('/author', authorController.createAuthor)
};