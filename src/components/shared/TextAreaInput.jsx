const TextAreaInput = ({ id, name, register }) => {
  return (
    <textarea
      name={name}
      id={id}
      cols='20'
      rows='7'
      className='max-w-xl p-3 bg-transparent border-2 outline-none resize-none border-neutral-800 font-helvetica'
      {...register}
    />
  );
};

export default TextAreaInput;
