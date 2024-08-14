import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#393A3F";
      document.body.style.color = "white";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#393A3F";
    }
  }
  return (
    <>
      <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
          <div className="container my-3">
            <Routes>
                <Route exact path="/" element={<TextForm heading="Enter your Text Here"/>} />
                <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
      </Router>
    </>
  )
}

export default App;