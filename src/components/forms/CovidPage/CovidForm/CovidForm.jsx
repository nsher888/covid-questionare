import useCovidForm from './UseCovidForm';
import { RightArrow, LeftArrow, RadioInput, Label } from '@/components';
import './CovidForm.css';

const CovidForm = () => {
  const { register, handleSubmit, onSubmit, errors, hadCovid, antiBodies } =
    useCovidForm();

  return (
    <div className='flex-1'>
      <form
        className='flex flex-col'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className='relative flex flex-col mb-12'>
          <Label title='გაქვს გადატანილი Covid-19?*' />
          <RadioInput
            value='yes'
            label='კი'
            error={errors.had_covid?.message}
            register={register('had_covid', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='no'
            label='არა'
            error={errors.had_covid?.message}
            register={register('had_covid', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='now'
            label='ახლა მაქვს'
            error={errors.had_covid?.message}
            register={register('had_covid', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />
          <p className='absolute text-orange-600 -bottom-7 left-5'>
            {errors.had_covid?.message}
          </p>
        </div>

        {hadCovid === 'yes' && (
          <div className='relative flex flex-col mb-12'>
            <Label title='ანტისხეულების ტესტი გაქვს გაკეთებული?*' />
            <RadioInput
              value='true'
              label='კი'
              error={errors.had_covid?.message}
              register={register('had_antibody_test', {
                required: 'მოცემული ველის შევსება სავალდებულოა',
              })}
            />
            <RadioInput
              value='false'
              label='არა'
              error={errors.had_covid?.message}
              register={register('had_antibody_test', {
                required: 'მოცემული ველის შევსება სავალდებულოა',
              })}
            />
            <p className='text-orange-600 -bottom-7 left-5'>
              {errors.had_antibody_test?.message}
            </p>
          </div>
        )}

        {antiBodies === 'true' && (
          <div className='flex flex-col'>
            <Label title='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*' />
            <div className='max-w-lg pl-5 mt-4'>
              <input
                type='date'
                id='antibodies_test_date'
                name='antibodies.test_date'
                className='w-full px-4 py-2 mb-6 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
                {...register('antibodies_test_date', {
                  required: 'მოცემული ველის შევსება სავალდებულოა',
                })}
              />
              <input
                type='number'
                name='antibodies.count'
                placeholder='ანტისხეულების რაოდენობა'
                className='w-full px-4 py-2 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
                {...register('antibodies_count', {
                  required: 'მოცემული ველის შევსება სავალდებულოა',
                })}
              />
            </div>
          </div>
        )}
        {antiBodies === 'false' && (
          <div>
            <Label title='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*' />
            <div className='max-w-lg pl-5 mt-4'>
              <input
                type='date'
                id='covid_date'
                name='covid_date'
                className='w-full px-4 py-2 mb-6 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
                {...register('covid_date', {
                  required: 'მოცემული ველის შევსება სავალდებულოა',
                })}
              />
            </div>
          </div>
        )}

        <div className='absolute flex -bottom-6 left-1/2 gap-28'>
          <button>
            <LeftArrow />
          </button>

          <button type='submit'>
            <RightArrow />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CovidForm;
