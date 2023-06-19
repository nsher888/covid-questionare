import { PreferencesBackground, PreferencesFigure } from '@/assets';
import { motion } from 'framer-motion';

const PreferencesAnimation = () => {
  return (
    <div className='relative flex-1'>
      <motion.img
        src={PreferencesFigure}
        initial={{ opacity: 0, width: 0, top: 210, right: 600 }}
        animate={{ opacity: 0.8, width: 288, top: 10, right: 250 }}
        transition={{ duration: 0.5 }}
        className='absolute left-6 opacity-80 top-11'
        alt='Rectangle'
      />
      <img src={PreferencesBackground} className='mt-3' alt='Ilustration' />
    </div>
  );
};

export default PreferencesAnimation;
