import backgroundImage from '@/assets/vaccinate2.png';
import rectangle from '@/assets/identification-rectangle.png';
import { motion } from 'framer-motion';

const CovidAnimation = () => {
  return (
    <div className='relative flex-1'>
      <motion.img
        src={rectangle}
        initial={{ opacity: 0, width: 0, top: 200, right: 700 }}
        animate={{ opacity: 0.8, width: 622, top: 80, right: 350 }}
        transition={{ duration: 0.5 }}
        className='absolute left-0 opacity-80 top-20'
        alt='Rectangle'
      />
      <img src={backgroundImage} className='-mt-20' alt='Ilustration' />
    </div>
  );
};

export default CovidAnimation;
