import { Layout } from '@/components';
import { IdentificationForm } from '@/components';
import { IdentificationAnimation } from '@/components';
import { useDocumentTitle } from '@/hooks';

const IdentificationPage = ({ title }) => {
  useDocumentTitle(title);
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
