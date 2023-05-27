import { useForm } from 'react-hook-form';
import { FormDataContext } from '../../../../context/FormDataContext';
import { useContext } from 'react';

const UseIdentificationForm = () => {
  const { formData } = useContext(FormDataContext);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: formData,
  });

  const { errors } = formState;

  const { updateFormData } = useContext(FormDataContext);

  const onSubmit = (data) => {
    updateFormData(data);
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default UseIdentificationForm;
