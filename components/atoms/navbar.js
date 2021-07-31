import Link from 'next/link';

import styles from './styles/navbar.module.scss';

const NavBar = () => (

    <ul className={styles.navbar}>
        <li>
            <Link href='/home'>
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