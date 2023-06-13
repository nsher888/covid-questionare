import { useContext, useEffect } from 'react';
import { FormDataContext } from '@/context';

const useThankYouPage = () => {
  const { formData } = useContext(FormDataContext);

  const filteredData = {};

  for (const key in formData) {
    if (formData[key] !== '') {
      filteredData[key] = formData[key];
    }
  }

  if (formData.antibodies_test_date && formData.antibodies_count) {
    filteredData.antibodies = {
      test_date: new Date(formData.test_date).toISOString(),
      number: parseInt(formData.number),
    };
  }

  filteredData.had_vaccine = formData.had_vaccine === 'true';

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filteredData),
    })
      .then((response) => {
        sessionStorage.clear();
        return response.statusText;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [filteredData]);
};

export default useThankYouPage;
