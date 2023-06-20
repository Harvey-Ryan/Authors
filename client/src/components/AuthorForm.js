
//Import useState & useEffect
import React, { useState, useEffect } from'react';
// Import Axios
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { deleteAuthor, updateAuthor } from '../../../server/controllers/author.controller';
import '../App.css';


// Create our New Author component

const NewAuthorForm = () => {
    const navigate = useNavigate();
    const [author, setAuthor] = useState("");
    const [error, setError] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            //IF YOU DON'T MATCH STATE WITH OBJECT KEYS
            //USE 'KEY': STATE VARIABLE
            //FOR EXAMPLE {author} = {author: author}
            //NOT THE DESIRED DB MATCH OF {name: author}
            .post('http://localhost:8000/api/authors', { name: author })
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setError(err.response.data.err.errors);
            });
    };

    return (
        <div>
            <Link to="/">Home</Link>
            <form onSubmit={handleSubmit}>
            {error.name ? <p className="error">{error.name.message}</p> : null}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    className="form-control"
                    id="name"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={ author }/>
                    <button type="submit" > Submit </button>
                </div>
            </form>
        </div>
    );
}

export default NewAuthorForm;

