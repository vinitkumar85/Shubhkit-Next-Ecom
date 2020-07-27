import Link from 'next/link';
import styles from './styles/productlist.module.scss';

const ProductList = ({ value }) => (
    <div className={styles.productitem}>
          <Link href='product/[sku]' as={'product/' + value.sku} passHref>
            <a>{value.name}</a>
          </Link>
          <p>{value.price} INR</p>
    </div>
  );

  export default ProductList;