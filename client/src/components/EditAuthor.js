
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Link, useNavigate } from'react-router-dom';

const EditAuthor = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [authorName, setAuthorName] = useState(""); //Use String to hold the name

    useEffect(() => {
    axios
        .get(`http://localhost:8000/api/authors/${id}`)
        .then((response) => {
        console.log(response.data);
        setAuthorName(response.data.name); //Dig deep to name key
        })
        .catch((err) => {
        console.log(err.response);
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name: authorName
        })
        .then((response) => {
        navigate('/');
        console.log(response.data);
        })
        .catch (err => {
            console.log(err.response);
        });
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={authorName} 
            onChange={(e) => setAuthorName(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
};

export default EditAuthor;
