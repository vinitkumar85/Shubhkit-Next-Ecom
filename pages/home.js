import MainLayout from '../components/layout/mainlayout';
import Homeproducts from '../components/molecules/homeproducts';

const Home = () => (
  <MainLayout>
    <div>
      <h1>Welcome Next gen E-commerce </h1>
      <p>
      Shubhkit.com is an initiative to help the people to attach to their traditional culture and fulfill their needs of all puja related items with an advanced e-commerce platform. We help the devotees to get all puja related items at their doorstep in the quickest delivery time.
        </p>
        <Homeproducts/>
    </div>
  </MainLayout>
)

export default Home