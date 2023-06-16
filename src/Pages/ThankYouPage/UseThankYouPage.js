import { useContext, useEffect } from 'react';
import { FormDataContext } from '@/context';

const useThankYouPage = () => {
  const { formData, clearFormData } = useContext(FormDataContext);
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
    const sendData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(filteredData),
        });

        if (response.ok) {
          sessionStorage.clear();
          clearFormData();
        } else {
          throw new Error('Server responded with an error');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    sendData();
  }, []);
};

export default useThankYouPage;
