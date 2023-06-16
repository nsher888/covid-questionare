import { ThankYouStar1 } from '@/assets';
import { motion } from 'framer-motion';
import useThankYouPage from './UseThankYouPage';
import { useDocumentTitle } from '@/hooks';

const ThankYouPage = ({ title }) => {
  useThankYouPage();
  useDocumentTitle(title);
  return (
    <div className='grid min-h-screen bg-neutral-800 place-items-center'>
      <div className='relative'>
        <motion.img
          src={ThankYouStar1}
          className='absolute -top-20 left-8'
          initial={{ opacity: 0, x: '300px', y: '300px' }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
        <motion.h1
          className='text-6xl font-bold text-white'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          მადლობა
        </motion.h1>
        <motion.img
          src={ThankYouStar1}
          className='absolute w-6 h-6 -bottom-12 right-8'
          initial={{ opacity: 0, x: '-300px', y: '-300px' }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default ThankYouPage;
