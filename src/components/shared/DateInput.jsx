const DateInput = ({ id, name, register }) => {
  return (
    <input
      type='date'
      id={id}
      name={name}
      className='w-full px-4 py-2 mb-6 bg-transparent border outline-none placeholder-neutral-800 border-neutral-800'
      {...register}
    />
  );
};

export default DateInput;
