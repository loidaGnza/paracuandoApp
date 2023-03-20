import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';

const tournaments = [
  {
    tournamentId: 1,
  },
  {
    tournamentId: 2,
  },
  {
    tournamentId: 3,
  },
  {
    tournamentId: 4,
  },
  {
    tournamentId: 5,
  },
];

export default function Torneos() {
  return (
    <Layout>
      <h1>This page is Inteerest</h1>
      <div>
        {tournaments.map((tournament) => (
          <p key={tournament.tournamentId}>
            <Link href={`/torneos/${tournament.tournamentId}`}>
              {' '}
              interest: {tournament.tournamentId}
            </Link>
          </p>
        ))}
      </div>
    </Layout>
  );
}
