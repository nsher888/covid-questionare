import { Layout, VaccineForm, VaccineAnimation } from '@/components';

const IdentificationPage = () => {
  return (
    <Layout page={3}>
      <div className='relative flex justify-between'>
        <VaccineForm />
        <VaccineAnimation />
      </div>
    </Layout>
  );
};

export default IdentificationPage;
