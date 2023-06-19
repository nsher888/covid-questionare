import { Layout, PreferencesForm, PreferencesAnimation } from '@/components';
import { useDocumentTitle } from '@/hooks';

const PreferencesPage = ({ title }) => {
  useDocumentTitle(title);

  return (
    <Layout page={4}>
      <div className='relative flex justify-between'>
        <PreferencesForm />
        <PreferencesAnimation />
      </div>
    </Layout>
  );
};

export default PreferencesPage;
