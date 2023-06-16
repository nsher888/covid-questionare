import './App.css';
import {
  IdentificationPage,
  LandingPage,
  CovidPage,
  VaccinePage,
  PreferencesPage,
  ThankYouPage,
  ErrorPage,
} from '@/Pages';
import { Routes, Route } from 'react-router-dom';
import { FormDataProvider } from '@/context';

function App() {
  return (
    <>
      <FormDataProvider>
        <Routes>
          <Route path='/' element={<LandingPage title='Covid Questionary' />} />
          <Route
            path='identification'
            element={<IdentificationPage title='Identity Information' />}
          />
          <Route
            path='covid'
            element={<CovidPage title='Covid Information' />}
          />
          <Route
            path='vaccine'
            element={<VaccinePage title='Vaccine Information' />}
          />
          <Route
            path='preferences'
            element={<PreferencesPage title='Preferences Information' />}
          />
          <Route
            path='thankyou'
            element={<ThankYouPage title='Covid Questionary' />}
          />
          <Route path='*' element={<ErrorPage title='404 Error' />} />
        </Routes>
      </FormDataProvider>
    </>
  );
}

export default App;
