// Importujemy potrzebne moduły z react-router-dom
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';

// Tworzymy trzy proste komponenty: Home, About, Contact
function Home() {
  return <Register/>;
}

function About() {
  return <h2>O Nas</h2>;
}

function Contact() {
  return <h2>Kontakt</h2>;
}

// Główny komponent App, w którym definiujemy routing
function App() {
  return (
    // Router: otacza całą aplikację, aby umożliwić obsługę tras
    <Router>
      {/* Nawigacja z linkami do różnych tras */}
      <nav>
        <Link to="/">Strona Główna</Link> | {" "}
        <Link to="/about">O Nas</Link> | {" "}
        <Link to="/contact">Kontakt</Link>
      </nav>

      {/* Definiowanie tras */}
      <Routes>
        {/* Każdy Route reprezentuje jedną trasę */}
        <Route path="/" element={<Home />} />
        {/* path="/" wskazuje, że Home będzie renderowany na głównej stronie */}
        
        <Route path="/about" element={<About />} />
        {/* path="/about" wskazuje, że About będzie renderowany na stronie /about */}
        
        <Route path="/contact" element={<Contact />} />
        {/* path="/contact" wskazuje, że Contact będzie renderowany na stronie /contact */}
      </Routes>
    </Router>
  );
}

export default App;
