import { useForm } from 'react-hook-form';
import { FormDataContext } from '@/context';
import { useContext, useEffect, useState } from 'react';

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

  useEffect(() => {
    if (JSON.stringify(watchedFields) !== JSON.stringify(savedFormData)) {
      updateFormData(watchedFields);
      setSavedFormData(watchedFields);
    }
  }, [watchedFields, updateFormData, savedFormData]);

  const onSubmit = (data) => {
    updateFormData(data);
  };

  useEffect(() => {
    if (hadCovid === 'no' || hadCovid === 'now') {
      unregister('had_antibody_test');
    }
  }, [hadCovid, unregister]);

  return { register, handleSubmit, errors, onSubmit, hadCovid, antiBodies };
};

export default useCovidForm;
