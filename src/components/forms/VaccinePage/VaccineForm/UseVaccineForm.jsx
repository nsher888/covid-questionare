import { useForm } from 'react-hook-form';
import { FormDataContext } from '@/context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useVaccineForm = () => {
  const { formData } = useContext(FormDataContext);
  const [savedFormData, setSavedFormData] = useState(formData);

  const { register, handleSubmit, formState, watch, unregister } = useForm({
    defaultValues: formData,
    mode: 'onChange',
  });

  const { errors } = formState;
  const { updateFormData } = useContext(FormDataContext);

  const watchedFields = watch();
  const hadVaccine = watchedFields.had_vaccine;
  const vaccineStage = watchedFields.vaccination_stage;
  const notVaccinated = watchedFields.not_vaccinated;

  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.stringify(watchedFields) !== JSON.stringify(savedFormData)) {
      updateFormData(watchedFields);
      setSavedFormData(watchedFields);
    }
  }, [watchedFields, updateFormData, savedFormData]);

  const onSubmit = (data) => {
    updateFormData(data);
  };

  const navigateToPreviousPage = () => {
    navigate('/covid');
  };

  useEffect(() => {
    if (hadVaccine === 'true') {
      unregister('not_vaccinated');
    }
    if (hadVaccine === 'false') {
      unregister('vaccination_stage');
    }
  }, [hadVaccine, unregister]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    navigateToPreviousPage,
    hadVaccine,
    vaccineStage,
    notVaccinated,
  };
};

export default useVaccineForm;
