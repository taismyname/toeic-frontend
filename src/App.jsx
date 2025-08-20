import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Listening from './components/Listening';
import Reading from './components/Reading';
import History from './components/History';
import Login from './components/Login';

function App() {
  console.log('App component rendered'); 
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/api/questions')
      .then(response => response.json())
      .then(data => {
        console.log('API data:', data); 
        setQuestions(data);
      })
      .catch(error => console.error('API error:', error));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home questions={questions} />} />
        <Route path="/listening" element={<Listening questions={questions} />} />
        <Route path="/reading" element={<Reading questions={questions} />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
