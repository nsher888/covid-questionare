import redberrylogo from 'assets/redberry-logo.svg';

const Header = () => {
  return (
    <header className='flex justify-between w-full pb-5 border-b-2 border-gray-800'>
      <img src={redberrylogo} alt='Redberry Logo' />
      <p>1/4</p>
    </header>
  );
};

export default Header;
