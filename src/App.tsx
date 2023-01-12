import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import List from './pages/List';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<List />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
