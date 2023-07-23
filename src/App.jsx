import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/OC-Project8-Portfolio/" element={<Home />} />
        <Route
          path="/OC-Project8-Portfolio/achievements"
          element={<Achievements />}
        />
        <Route
          path="/OC-Project8-Portfolio/project/:id"
          element={<Project />}
        />
        <Route path="/OC-Project8-Portfolio/contact" element={<Contact />} />
        <Route path="/OC-Project8-Portfolio/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
