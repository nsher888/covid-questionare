import './App.css';
import {
  IdentificationPage,
  LandingPage,
  CovidPage,
  VaccinePage,
  PreferencesPage,
  ThankYouPage,
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
          <Route path='thankyou' element={<ThankYouPage />} />
        </Routes>
      </FormDataProvider>
    </>
  );
}

export default App;
