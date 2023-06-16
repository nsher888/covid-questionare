import { motion } from 'framer-motion';
import { LandingLogo } from '@/assets';

const LogoAnimation = () => {
  return (
    <motion.div
      initial={{ scale: 100 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={LandingLogo} className='w-24 h-24 ' alt='Image' />
    </motion.div>
  );
};

export default LogoAnimation;
