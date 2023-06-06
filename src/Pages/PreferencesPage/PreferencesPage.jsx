import { Layout, PreferencesForm, PreferencesAnimation } from '@/components';

const PreferencesPage = () => {
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
