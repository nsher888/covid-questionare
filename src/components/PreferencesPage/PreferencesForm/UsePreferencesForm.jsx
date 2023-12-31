import { useForm } from 'react-hook-form';
import { FormDataContext } from '@/context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const usePreferencesForm = () => {
  const { formData } = useContext(FormDataContext);
  const [savedFormData, setSavedFormData] = useState(formData);

  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: formData,
    mode: 'onChange',
  });

  const { errors } = formState;
  const { updateFormData } = useContext(FormDataContext);

  const watchedFields = watch();

  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.stringify(watchedFields) !== JSON.stringify(savedFormData)) {
      updateFormData(watchedFields);
      setSavedFormData(watchedFields);
    }
  }, [watchedFields, updateFormData, savedFormData]);

  const onSubmit = (data) => {
    updateFormData(data);
    navigate('/thankyou');
  };

  const navigateToPreviousPage = () => {
    navigate('/vaccine');
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    navigateToPreviousPage,
  };
};

export default usePreferencesForm;
