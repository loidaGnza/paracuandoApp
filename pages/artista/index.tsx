import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';

const artists = [
  {
    artistID: 1,
  },
  {
    artistID: 2,
  },
  {
    artistID: 3,
  },
];
export default function Index() {
  return (
    <Layout>
      <h1>artist route</h1>
      <div>
        {artists.map((artist) => (
          <p key={artist.artistID}>
            <Link href={`/artista/${artist.artistID}`}>
              Artist: {artist.artistID}
            </Link>
          </p>
        ))}
      </div>
    </Layout>
  );
}
