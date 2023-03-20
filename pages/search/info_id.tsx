import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const SearchInfoPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { info_content } = router.query;

  return <div>You are searching: {info_content}</div>;
};

SearchInfoPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default SearchInfoPage;
