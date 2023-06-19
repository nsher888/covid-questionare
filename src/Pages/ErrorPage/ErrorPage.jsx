import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/hooks';

const ErrorPage = ({ title }) => {
  useDocumentTitle(title);
  return (
    <div className='grid min-h-screen bg-black place-items-center'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-5xl text-white'>Page Not Found</h1>
        <Link to='/' className='text-2xl text-white underline'>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
