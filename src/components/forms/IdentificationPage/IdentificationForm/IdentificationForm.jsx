import { RightArrow, CustomInput, Label } from '@/components';
import UseIdentificationForm from './UseIdentificationForm';

const IdentificationForm = () => {
  const { register, handleSubmit, onSubmit, errors } = UseIdentificationForm();

  return (
    <div className='flex-1'>
      <form
        className='flex flex-col'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className='relative flex flex-col mb-12'>
          <Label title='სახელი*' htmlFor='first_name' />
          <CustomInput
            type='text'
            id='first_name'
            name='first_name'
            placeholder='იოსებ'
            register={register('first_name', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
              minLength: {
                value: 2,
                message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
              },
            })}
          />
          <p className='absolute text-orange-600 -bottom-7 left-5 font-helvetica'>
            {errors.first_name?.message}
          </p>
        </div>

        <div className='relative flex flex-col mb-12'>
          <Label title='გვარი*' htmlFor='last_name' />
          <CustomInput
            type='text'
            id='last_name'
            name='last_name'
            placeholder='ჯუღაშვილი'
            register={register('last_name', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
              minLength: {
                value: 2,
                message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
              },
            })}
          />
          <p className='absolute text-orange-600 -bottom-7 left-5 font-helvetica'>
            {errors.last_name?.message}
          </p>
        </div>

        <div className='relative flex flex-col mb-12'>
          <Label title='მეილი*' htmlFor='email' />
          <CustomInput
            type='email'
            id='email'
            name='email'
            placeholder='fbi@redberry.ge'
            register={register('email', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
              validate: {
                validFormat: (value) =>
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    value
                  ) || 'თქვენ მიერ შეყვანილი მეილი არასწორია',
                validDomain: (value) =>
                  value.endsWith('@redberry.ge') ||
                  'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
              },
            })}
          />
          <p className='absolute text-orange-600 -bottom-7 left-5 font-helvetica'>
            {errors.email?.message}
          </p>
        </div>

        <div className='max-w-xs mt-28'>
          <p className='pt-5 border-t border-neutral-800 text-zinc-600'>
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </p>
        </div>

        <button
          type='submit'
          className='absolute cursor-pointer -bottom-6 left-[45%]'
        >
          <RightArrow />
        </button>
      </form>
    </div>
  );
};

export default IdentificationForm;
