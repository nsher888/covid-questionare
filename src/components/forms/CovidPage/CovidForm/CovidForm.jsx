import useCovidForm from './UseCovidForm';
import {
  RightArrow,
  LeftArrow,
  RadioInput,
  Label,
  DateInput,
  CustomInput,
  DisabledRightArrow,
} from '@/components';
import './CovidForm.css';

const CovidForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    hadCovid,
    antiBodies,
    navigateToPreviousPage,
    isValid,
  } = useCovidForm();

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
            value='have_right_now'
            label='ახლა მაქვს'
            error={errors.had_covid?.message}
            register={register('had_covid', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />
          <p className='absolute text-orange-600 -bottom-7 left-5 font-helvetica '>
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
            <p className='text-orange-600 -bottom-7 left-5 font-helvetica'>
              {errors.had_antibody_test?.message}
            </p>
          </div>
        )}

        {antiBodies === 'true' && (
          <div className='flex flex-col'>
            <Label title='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*' />
            <div className='max-w-lg pl-5 mt-4'>
              <DateInput id='test_date' name='test_date'register={register('test_date')} />
              <p className='absolute text-orange-600 -bottom-7 left-5 font-helvetica'>
                {errors.test_date?.message}
              </p>
              <CustomInput
                type='number'
                name='number'
                placeholder='ანტისხეულების რაოდენობა'
                register={register('number')}
              />
              <p className='absolute text-orange-600 -bottom-7 left-5 font-helvetica'>
                {errors.number?.message}
              </p>
            </div>
          </div>
        )}
        {antiBodies === 'false' && (
          <div>
            <Label title='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*' />
            <div className='relative max-w-lg pl-5 mt-4'>
              <DateInput
                id='covid_sickness_date'
                name='covid_sickness_date'
                register={register('covid_sickness_date', {
                  required: 'მოცემული ველის შევსება სავალდებულოა',
                })}
              />
              <p className='absolute text-orange-600 -bottom-7 left-5 font-helvetica'>
                {errors.covid_sickness_date?.message}
              </p>
            </div>
          </div>
        )}

        <div className='absolute flex -bottom-6 left-[45%] gap-28'>
          <button type='button' onClick={navigateToPreviousPage}>
            <LeftArrow />
          </button>

          <button type='submit' {...(isValid ? {} : { disabled: true })}>
            {isValid ? <RightArrow /> : <DisabledRightArrow />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CovidForm;
