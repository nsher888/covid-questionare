import { createContext, useState, useEffect } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const storedFormData = sessionStorage.getItem('formData');
    return storedFormData ? JSON.parse(storedFormData) : {};
  });

  useEffect(() => {
    sessionStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (data) => {
    setFormData(data);
  };

  const clearFormData = () => {
    setFormData({});
  };

  return (
    <FormDataContext.Provider
      value={{ formData, updateFormData, clearFormData }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
