import usePreferencesForm from './UsePreferencesForm';
import { LeftArrow, RadioInput, Label, TextAreaInput } from '@/components';

const PreferencesForm = () => {
  const { register, handleSubmit, onSubmit, errors, navigateToPreviousPage } =
    usePreferencesForm();

  return (
    <div className='flex-1'>
      <form
        className='flex flex-col max-w-2xl'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className='relative flex flex-col mb-12'>
          <Label title='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*' />
          <RadioInput
            value='twice_a_week'
            label='კვირაში ორჯერ'
            error={errors.non_formal_meetings?.message}
            register={register('non_formal_meetings', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='once_a_week'
            label='კვირაში ერთხელ'
            error={errors.non_formal_meetings?.message}
            register={register('non_formal_meetings', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='once_in_a_two_weeks'
            label='ორ კვირაში ერთხელ'
            error={errors.non_formal_meetings?.message}
            register={register('non_formal_meetings', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='once_in_a_month'
            label='თვეში ერთხელ'
            error={errors.non_formal_meetings?.message}
            register={register('non_formal_meetings', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <p className='absolute text-orange-600 -bottom-7 left-5 font-helvetica'>
            {errors.non_formal_meetings?.message}
          </p>
        </div>

        <div className='relative flex flex-col mb-12'>
          <Label title='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*' />

          <RadioInput
            value='0'
            label='0'
            error={errors.number_of_days_from_office?.message}
            register={register('number_of_days_from_office', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='1'
            label='1'
            error={errors.number_of_days_from_office?.message}
            register={register('number_of_days_from_office', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='2'
            label='2'
            error={errors.number_of_days_from_office?.message}
            register={register('number_of_days_from_office', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='3'
            label='3'
            error={errors.number_of_days_from_office?.message}
            register={register('number_of_days_from_office', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='4'
            label='4'
            error={errors.number_of_days_from_office?.message}
            register={register('number_of_days_from_office', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <RadioInput
            value='5'
            label='5'
            error={errors.number_of_days_from_office?.message}
            register={register('number_of_days_from_office', {
              required: 'მოცემული ველის შევსება სავალდებულოა',
            })}
          />

          <p className='absolute text-orange-600 -bottom-7 left-5 font-helvetica'>
            {errors.number_of_days_from_office?.message}
          </p>
        </div>

        <div className='relative flex flex-col mb-12'>
          <Label
            htmlFor='what_about_meetings_in_live'
            title='რას ფიქრობ ფიზიკურ შეკრებებზე?'
          />
          <TextAreaInput
            id='what_about_meetings_in_live'
            name='what_about_meetings_in_live'
            register={register('what_about_meetings_in_live')}
          />
        </div>

        <div className='relative flex flex-col mb-12'>
          <Label
            htmlFor='tell_us_your_opinion_about_us'
            title='რას ფიქრობ არსებულ გარემოზე: 
            რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'
          />
          <TextAreaInput
            id='tell_us_your_opinion_about_us'
            name='tell_us_your_opinion_about_us'
            register={register('tell_us_your_opinion_about_us')}
          />
        </div>

        <button
          className='flex items-center self-end px-6 py-4 mb-12 text-lg font-bold text-white bg-cyan-700 rounded-3xl font-Contractica'
          type='submit'
        >
          დასრულება
        </button>

        <div className='absolute flex -bottom-6 left-[45%] gap-28'>
          <button type='button' onClick={navigateToPreviousPage}>
            <LeftArrow />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreferencesForm;
