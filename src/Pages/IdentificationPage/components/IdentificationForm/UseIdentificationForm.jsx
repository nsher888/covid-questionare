import { useForm } from 'react-hook-form';

const UseIdentificationForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default UseIdentificationForm;
