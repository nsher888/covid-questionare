const RadioOption = ({ value, label, register }) => {
  return (
    <>
      <label className='flex items-center gap-5 mb-3'>
        <input
          className='w-5 h-5 accent-neutral-800'
          type='radio'
          value={value}
          {...register}
        />
        <span className='text-xl text-neutral-800 font-helvetica'>{label}</span>
      </label>
    </>
  );
};

export default RadioOption;
