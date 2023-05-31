import { Layout } from '@/components';
import { CovidAnimation, CovidForm } from '@/components';

const CovidPage = () => {
  return (
    <Layout page={2}>
      <div className='relative flex justify-between'>
        <CovidForm />
        <CovidAnimation />
      </div>
    </Layout>
  );
};

export default CovidPage;
