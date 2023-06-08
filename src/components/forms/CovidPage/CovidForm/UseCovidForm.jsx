import { useForm } from 'react-hook-form';
import { FormDataContext } from '@/context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCovidForm = () => {
  const { formData } = useContext(FormDataContext);
  const [savedFormData, setSavedFormData] = useState(formData);

  const { register, handleSubmit, formState, watch, unregister } = useForm({
    defaultValues: formData,
    mode: 'onChange',
  });

  const { errors } = formState;
  const { updateFormData } = useContext(FormDataContext);

  const watchedFields = watch();
  const hadCovid = watchedFields.had_covid;
  const antiBodies = watchedFields.had_antibody_test;

  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.stringify(watchedFields) !== JSON.stringify(savedFormData)) {
      updateFormData(watchedFields);
      setSavedFormData(watchedFields);
    }
  }, [watchedFields, updateFormData, savedFormData]);

  const onSubmit = (data) => {
    updateFormData(data);
    navigate('/vaccine');
  };

  const navigateToPreviousPage = () => {
    navigate('/identification');
  };

  useEffect(() => {
    if (hadCovid === 'no' || hadCovid === 'have_right_now') {
      unregister('had_antibody_test');
      unregister('covid_date');
      unregister('test_date');
      unregister('number');
      unregister('covid_sickness_date');
    }
    if (antiBodies === 'false') {
      unregister('test_date');
      unregister('number');
    }
    if (antiBodies === 'true') {
      unregister('covid_date');
    }
  }, [hadCovid, antiBodies, unregister]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    hadCovid,
    antiBodies,
    navigateToPreviousPage,
  };
};

export default useCovidForm;
