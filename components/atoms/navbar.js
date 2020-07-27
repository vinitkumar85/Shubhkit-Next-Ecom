import Link from 'next/link';

import styles from './styles/navBar.module.scss';

const NavBar = () => (

    <ul className={styles.navbar}>
        <li>
            <Link href='/index'>
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href='/products'>
                <a>Products</a>
            </Link>
        </li>
    </ul>

)

export default NavBar