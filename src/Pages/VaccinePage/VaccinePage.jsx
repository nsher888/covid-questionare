import { Layout, VaccineForm, VaccineAnimation } from '@/components';
import { useDocumentTitle } from '@/hooks';

const IdentificationPage = ({ title }) => {
  useDocumentTitle(title);
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
