import redberrylogo from 'assets/redberry-logo.svg';

const Header = ({ page }) => {
  return (
    <header className='flex justify-between w-full pb-5 mb-10 border-b-2 border-gray-800'>
      <img src={redberrylogo} alt='Redberry Logo' />
      <p>{page}/4</p>
    </header>
  );
};

export default Header;
