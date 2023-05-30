const DateInput = ({ id, name, register }) => {
  return (
    <div className='relative max-w-lg pl-5 mt-4'>
      <input
        type='date'
        id={id}
        name={name}
        className='w-full px-4 py-2 mb-6 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
        {...register(name, {
          required: 'მოცემული ველის შევსება სავალდებულოა',
        })}
      />
    </div>
  );
};

export default DateInput;
