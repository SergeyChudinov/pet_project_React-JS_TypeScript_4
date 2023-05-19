import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutsPage } from './pages/AboutPage';




const App: React.FC = () => {


  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/about" element={<AboutsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

