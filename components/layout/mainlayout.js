import Header from '../molecules/header';
import Footer from '../molecules/footer';

const MainLayout = ({ children }) => (
    <div>
        <Header />
        <div className="main-container">
            {children}
        </div>
        <div>
            Important Desclaimer
      </div>
        <Footer />
    </div>
);

export default MainLayout;