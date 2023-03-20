import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';

const brands = [
  {
    brandID: 1,
  },
  {
    brandID: 2,
  },
  {
    brandID: 3,
  },
];

export default function Marca() {
  return (
    <Layout>
      <h1>this page is brands and stores</h1>
      <div>
        {brands.map((brand) => (
          <p key={brand.brandID}>
            <Link href={`/marca/${brand.brandID}`}>Brand: {brand.brandID}</Link>
          </p>
        ))}
      </div>
    </Layout>
  );
}
