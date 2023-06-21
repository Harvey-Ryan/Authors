
//Import useState & useEffect
import React, { useState, useEffect } from'react';
// Import Axios
import axios from 'axios';
import { Link } from'react-router-dom';
// import { deleteAuthor, updateAuthor } from '../../../server/controllers/author.controller';
import '../App.css';




//Declare DisplayAll component
const DisplayAll = () => {
    //Declare useState & useEffect
    const [allAuthors, setAllAuthors] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:8000/api/authors')
        .then((res) => {
            setAllAuthors(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.res)
    });
    }, []);

    //Delete Author
    const deleteAuthor = (id) => {
        axios
        .delete(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            setAllAuthors(res.data);
            console.log(res.data);
            // Set and return filtered list
            const filteredAuthors = allAuthors.filter(
                (author, index) => author._id!== id)
                setAllAuthors(filteredAuthors);
        })
        .catch((err) => {
            console.log(err.res)
    });
    };

    return (
        <div className='App'>
            <div><Link to={'/new'}>Add Author</Link></div>
            <p className='purple-text'>We Have Quotes By...</p>
            <table className='table-main'>
                    <thead className='thead-main'>
                        <tr className='trow'>
                            <th className='thead'>Author</th>
                            <th className='thead'>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {allAuthors.map((author, index) => {
                            return (
                            <tr className='trow2' key={author._id}>
                                <td className='tabledata'>{author.name}</td>
                                <td className='tabledata'>
                                    <Link to={`/edit/${author._id}`}>
                                        <button className='button'>Edit</button>
                                    </Link>
                                    <Link to={`/delete/${author._id}`}>
                                    <button className='button' onClick={() => deleteAuthor(author._id)}>Delete</button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
            </table>
        </div>
    );
};

export default DisplayAll;