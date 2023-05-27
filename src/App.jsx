import './App.css';
import { IdentificationPage, LandingPage } from '@/pages';
import { Routes, Route } from 'react-router-dom';
import { FormDataProvider } from './context/FormDataContext';

function App() {
  return (
    <>
      <FormDataProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='identification' element={<IdentificationPage />} />
        </Routes>
      </FormDataProvider>
    </>
  );
}

export default App;
