const Label = ({ title, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className='mb-3 text-xl font-bold font-helveticab'>
      {title}
    </label>
  );
};

export default Label;
