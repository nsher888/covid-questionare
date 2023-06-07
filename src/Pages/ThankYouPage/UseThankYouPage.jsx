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
      test_date: new Date(formData.antibodies_test_date).toISOString(),
      number: parseInt(formData.antibodies_count),
    };
  }

  filteredData.had_vaccine = formData.had_vaccine === 'true';

  console.log(filteredData);

  useEffect(() => {
    fetch('https://covid19.devtest.ge/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filteredData),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [filteredData]);
};

export default useThankYouPage;
