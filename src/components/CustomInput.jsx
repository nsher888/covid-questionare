const CustomInput = ({ type, name, placeholder, register }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className='relative w-full max-w-lg px-4 py-2 bg-transparent border outline-none text-neutral-700 placeholder-neutral-800 border-neutral-800 font-helvetica placeholder:text-neutral-700'
      {...register}
    />
  );
};

export default CustomInput;
