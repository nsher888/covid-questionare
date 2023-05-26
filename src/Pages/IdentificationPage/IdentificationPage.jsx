import { Layout } from 'components';
import { IdentificationForm } from './components/IdentificationForm';
import { IdentificationAnimation } from './components/IdentificationAnimation';

const IdentificationPage = () => {
  return (
    <Layout page={1}>
      <div className='flex justify-between'>
        <IdentificationForm />
        <IdentificationAnimation />
      </div>
    </Layout>
  );
};

export default IdentificationPage;
