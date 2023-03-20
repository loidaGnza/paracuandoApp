import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const MarcasPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { brand_id } = router.query;
  return (
    <div>
      <h1 className="text-2xl">
        {' '}
        this page is <span className="text-app-red text-6xl">{brand_id}</span>
      </h1>
    </div>
  );
};

MarcasPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
export default MarcasPage;
