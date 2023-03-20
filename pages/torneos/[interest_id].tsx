import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const TournamentPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { interest_id } = router.query;
  return (
    <div>
      <h1 className="text-2xl"></h1>
      this page is
      <span className="text-app-red text-6xl">{interest_id}</span>
    </div>
  );
};

TournamentPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default TournamentPage;
