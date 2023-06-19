import { Layout } from '@/components';
import { CovidAnimation, CovidForm } from '@/components';
import { useDocumentTitle } from '@/hooks';

const CovidPage = ({ title }) => {
  useDocumentTitle(title);
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
