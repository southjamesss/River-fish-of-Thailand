import HomePage from "./components/HomePage";  // Import the HomePage component
import './index.css';  // หรือไฟล์ CSS ที่คุณใช้
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpeciesPage from './components/SpeciesPage';
import ConservationPage from './components/ConservationPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/species" element={<SpeciesPage />} />
        <Route path="/conservation" element={<ConservationPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;