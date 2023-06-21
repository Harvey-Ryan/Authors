
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayAll from './components/DisplayAll';
import NewAuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';
import DeleteAuthor from './components/DisplayAll';

function App() {
  return (
    <div className="App">
      <h1> Favorite Authors</h1>
      <Router>
        <Routes>
          <Route path="/" element={ <DisplayAll /> } />
          <Route path="/new" element={ <NewAuthorForm /> } />
          <Route path="/edit/:id" element={ <EditAuthor /> } />
          <Route path="/delete/:id" element={ <DeleteAuthor /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
