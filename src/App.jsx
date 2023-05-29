import './App.css';
import { IdentificationPage, LandingPage, CovidPage } from '@/pages';
import { Routes, Route } from 'react-router-dom';
import { FormDataProvider } from '@/context';

function App() {
  return (
    <>
      <FormDataProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='identification' element={<IdentificationPage />} />
          <Route path='covid' element={<CovidPage />} />
        </Routes>
      </FormDataProvider>
    </>
  );
}

export default App;
