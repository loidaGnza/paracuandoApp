import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const ArtistsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { artist_id } = router.query;
  console.log(router);
  return (
    <div>
      <h1 className="text-2x1">
        this page is{' '}
        <span className="text-app-red text-6xl"> {artist_id} </span>
      </h1>
    </div>
  );
};

ArtistsPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
export default ArtistsPage;
