import { Layout } from '@/components';
import { IdentificationForm } from '@/components';
import { IdentificationAnimation } from '@/components';

const IdentificationPage = () => {
  return (
    <Layout page={1}>
      <div className='relative flex justify-between'>
        <IdentificationForm />
        <IdentificationAnimation />
      </div>
    </Layout>
  );
};

export default IdentificationPage;
