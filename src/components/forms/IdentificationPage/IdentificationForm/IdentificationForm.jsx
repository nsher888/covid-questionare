import { RightArrow } from '@/components';
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
          <label htmlFor='first_name' className='mb-3 text-xl font-bold'>
            სახელი*
          </label>
          <input
            type='text'
            name='first_name'
            className='max-w-lg px-4 py-2 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
            placeholder='იოსებ'
            {...register('first_name', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
              minLength: {
                value: 2,
                message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
              },
            })}
          />
          <p className='absolute text-orange-600 -bottom-7 left-5'>
            {errors.first_name?.message}
          </p>
        </div>

        <div className='relative flex flex-col mb-12'>
          <label htmlFor='last_name' className='mb-3 text-xl font-bold'>
            გვარი*
          </label>
          <input
            type='text'
            name='last_name'
            id='last_name'
            className='max-w-lg px-4 py-2 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
            placeholder='ჯუღაშვილი'
            {...register('last_name', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
              minLength: {
                value: 2,
                message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
              },
            })}
          />
          <p className='absolute text-orange-600 -bottom-7 left-5'>
            {errors.last_name?.message}
          </p>
        </div>

        <div className='relative flex flex-col mb-12'>
          <label htmlFor='email' className='mb-3 text-xl font-bold'>
            მეილი*
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='max-w-lg px-4 py-2 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
            placeholder='fbi@redberry.ge'
            {...register('email', {
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
          <p className='absolute text-orange-600 -bottom-7 left-5'>
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
