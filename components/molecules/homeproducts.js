import Link from 'next/link';
import styles from './styles/homeproducts.module.scss';

const HomeProducts = () => (
    <div className={styles.linkgrid}>
      <Link href={{ pathname: '/products', query: { catid: '10' } }}>
        <a>Kit</a>
      </Link>
      <Link href={{ pathname: '/products', query: { catid: '8' } }}>
        <a>Essentials</a>
      </Link>
      <Link href={{ pathname: '/products', query: { catid: '12' } }}>
        <a>Books</a>
      </Link>
      <Link href={{ pathname: '/products', query: { catid: '7' } }}>
        <a>Daily Needs</a>
      </Link>
    </div>
)

export default HomeProducts;