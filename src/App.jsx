import './App.css';
import { IdentificationPage, LandingPage } from 'pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='identification' element={<IdentificationPage />} />
      </Routes>
    </>
  );
}

export default App;
