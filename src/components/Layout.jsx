import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen py-24 bg-gray-200 px-52'>
      <div className='max-w-[1524px] mx-auto'>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
