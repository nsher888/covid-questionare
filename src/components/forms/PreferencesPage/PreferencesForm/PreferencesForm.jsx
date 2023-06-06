import usePreferencesForm from './UsePreferencesForm';
import { RightArrow, LeftArrow, RadioInput, Label } from '@/components';

const PreferencesForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    navigateToPreviousPage,
    hadVaccine,
    vaccineStage,
    notVaccinated,
  } = usePreferencesForm();

  return (
    <div className='flex-1'>
      <form
        className='flex flex-col'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className='relative flex flex-col mb-12'>
          <Label title='უკვე აცრილი ხარ?*' />
          <RadioInput
            value='true'
            label='კი'
            error={errors.had_covid?.message}
            register={register('had_vaccine', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='false'
            label='არა'
            error={errors.had_covid?.message}
            register={register('had_vaccine', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />
          <p className='absolute text-orange-600 -bottom-7 left-5'>
            {errors.had_vaccine?.message}
          </p>
        </div>

        {hadVaccine === 'true' && (
          <div className='relative flex flex-col mb-12'>
            <Label title='აირჩიე რა ეტაპზე ხარ*?' />

            <RadioInput
              value='first_dosage_and_registered_on_the_second'
              label='პირველი დოზა და დარეგისტრირებული ვარ მეორეზე'
              error={errors.vaccination_stage?.message}
              register={register('vaccination_stage', {
                required: 'მოცემული ველის შევსება სავალდებულოა',
              })}
            />
            <RadioInput
              value='fully_vaccinated'
              label='სრულად აცრილი ვარ'
              error={errors.vaccination_stage?.message}
              register={register('vaccination_stage', {
                required: 'მოცემული ველის შევსება სავალდებულოა',
              })}
            />
            <RadioInput
              value='first_dosage_and_not_registered_on_the_second'
              label='პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე'
              error={errors.vaccination_stage?.message}
              register={register('vaccination_stage', {
                required: 'მოცემული ველის შევსება სავალდებულოა',
              })}
            />

            <p className='absolute text-orange-600 -bottom-7 left-5'>
              {errors.vaccination_stage?.message}
            </p>

            {vaccineStage ===
              'first_dosage_and_not_registered_on_the_second' && (
              <p className='mt-10 ml-10 text-lg text-neutral-800'>
                რომ არ გადადო, <br /> ბარემ ახლავე დარეგისტრირდი <br />
                <a className='text-cyan-600' href='https://booking.moh.gov.ge/'>
                  https://booking.moh.gov.ge/
                </a>
              </p>
            )}
          </div>
        )}

        {hadVaccine === 'false' && (
          <div className='relative flex flex-col mb-12'>
            <Label title='რას ელოდები?*' />

            <RadioInput
              value='registered_and_waiting_for_a_date'
              label='დარეგისტრირებული ვარ და ველოდები რიცხვს'
              error={errors.not_vaccinated?.message}
              register={register('not_vaccinated', {
                required: 'მოცემული ველის შევსება სავალდებულოა',
              })}
            />
            <RadioInput
              value='not_going_to_vaccinate'
              label='არ ვგეგმავ'
              error={errors.not_vaccinated?.message}
              register={register('not_vaccinated', {
                required: 'მოცემული ველის შევსება სავალდებულოა',
              })}
            />
            <RadioInput
              value='first_dosage_and_not_registered_on_the_second'
              label='გადატანილი მაქვს და ვგეგმავ აცრას'
              error={errors.not_vaccinated?.message}
              register={register('not_vaccinated', {
                required: 'მოცემული ველის შევსება სავალდებულოა',
              })}
            />

            <p className='absolute text-orange-600 -bottom-7 left-5'>
              {errors.not_vaccinated?.message}
            </p>

            {notVaccinated === 'not_going_to_vaccinate' && (
              <div className='mt-10 ml-10 text-lg text-neutral-800'>
                👉
                <a className='text-cyan-600' href='https://booking.moh.gov.ge/'>
                  https://booking.moh.gov.ge/
                </a>
              </div>
            )}

            {notVaccinated ===
              'first_dosage_and_not_registered_on_the_second' && (
              <div className='mt-10 ml-10 text-lg text-neutral-800'>
                <p>
                  ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br />
                  თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
                </p>

                <p className='mt-5'>👉 რეგისტრაციის ბმული</p>
                <a className='text-cyan-600' href='https://booking.moh.gov.ge/'>
                  https://booking.moh.gov.ge/
                </a>
              </div>
            )}
          </div>
        )}

        <div className='absolute flex -bottom-6 left-[45%] gap-28'>
          <button type='button' onClick={navigateToPreviousPage}>
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

export default PreferencesForm;
