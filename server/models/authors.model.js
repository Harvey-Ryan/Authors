
// Connect to the database
const mongoose = require('mongoose');

// Create a schema
const authorsSchema = ({
    name: {
        type: String,
        required: [true, 'Please add an author name.'], // First layer of validation
        minLength: [3, 'Author name must be at least 3 characters long.'], // Second layer of validation
    },
});

// Create and export a model
module.exports = mongoose.model('Authors', authorsSchema);