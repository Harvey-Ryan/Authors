
// Import Author model
const Author = require('../models/authors.model');

// Declare then export the createAuthor function
const createAuthor = (req, res) => {
  Author.create(req.body)
    .then(newAuthor => {
      res.json({ newAuthor });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

// Create Get all Authors
const getAllAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => {
      res.json(allAuthors);
      console.log(allAuthors);
    })
    .catch((err) => {
      res.status(400).json({ err });
      console.log(err);
    });
};

// Create Get Author by ID
const getAuthorById = (req, res) => {
  Author.findById(req.params.id)
    .then((author) => {
      res.json(author);
      console.log(author);
    })
    .catch((err) => {
      res.status(400).json({ err });
      console.log(err);
    });
};

// Create Update Author
const updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
    })
    .then((updatedAuthor) => {
        res.json({ updatedAuthor });
        console.log(updatedAuthor);
    })
    .catch((err) => {
        res.status(400).json({ err });
        console.log(err);
    });
};

// Create Delete Author
const deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
    .then((deletedAuthor) => {
        res.json({ deletedAuthor });
        console.log(deletedAuthor);
    })
    .catch((err) => {
        res.status(400).json({ err });
        console.log(err);
    });
};

// Export the createAuthor functions
module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor
};
