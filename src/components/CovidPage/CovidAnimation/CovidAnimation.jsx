import { CovidBackground, CovidFigure } from '@/assets';
import { motion } from 'framer-motion';

const CovidAnimation = () => {
  return (
    <div className='relative flex-1'>
      <motion.img
        src={CovidFigure}
        initial={{ opacity: 0, width: 0, top: 200, right: 720 }}
        animate={{ opacity: 0.8, width: 200, top: 100, right: 380 }}
        transition={{ duration: 0.5 }}
        className='absolute left-0 opacity-80 top-20'
        alt='Rectangle'
      />
      <img src={CovidBackground} className='z-50 -mt-16' alt='Ilustration' />
    </div>
  );
};

export default CovidAnimation;
