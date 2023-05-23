import { motion } from 'framer-motion';

const LogoAnimation = () => {
  return (
    <motion.div
      initial={{ scale: 100 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src='src/assets/logo.svg' className='w-24 h-24 ' alt='Image' />
    </motion.div>
  );
};

export default LogoAnimation;
