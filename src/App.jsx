import './App.css';
import {
  IdentificationPage,
  LandingPage,
  CovidPage,
  VaccinePage,
  PreferencesPage,
} from '@/pages';
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
          <Route path='vaccine' element={<VaccinePage />} />
          <Route path='preferences' element={<PreferencesPage />} />
        </Routes>
      </FormDataProvider>
    </>
  );
}

export default App;
