
//Import our Controllers
const authorController = require('../controllers/author.controller');

//Declare our routes
module.exports = (app) => {
    //Create author route
    app.post("/api/authors", authorController.createAuthor);
    //Get all authors
    app.get("/api/authors", authorController.getAllAuthors);
    //Get author by id
    app.get("/api/authors/:id", authorController.getAuthorById);
    //Update author by id
    app.put("/api/authors/:id", authorController.updateAuthor);
    //Delete author by id
    app.delete("/api/authors/:id", authorController.deleteAuthor);
};