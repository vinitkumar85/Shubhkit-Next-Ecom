import {wrapper} from '../store/store';
import '../styles.css';

const MyApp = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);