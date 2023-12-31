import { LogoAnimation } from '@/components';
import { motion } from 'framer-motion';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/hooks';

const LandingPage = ({ title }) => {
  useDocumentTitle(title);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-24 bg-gray-200'>
      <LogoAnimation />
      <Link to='/identification'>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
            type: 'physics',
            stiffness: 120,
          }}
          className='max-w-[170px]  cursor-pointer text-3xl font-bold text-center font-Contractica text-neutral-800 landing-text-shadow'
          from={{ opacity: 0, y: -100 }}
        >
          კითხვარის დაწყება
        </motion.div>
      </Link>
    </div>
  );
};

export default LandingPage;
