import axios from 'axios';
import Head from 'next/head';
import MainLayout from '../components/layout/mainlayout';
import ProductList from '../components/molecules/productList';
import appConfig from '../appconfig';

const Products = (props) => (
  <MainLayout>
    <Head>
      <title>Shubhkit - Product Listing</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Products</h1>
    <div className="product-grid">
      {props.posts.map((value, index) => {
        return (
          <div key={index}><ProductList value={value} /></div>
        )
      })}
    </div>
  </MainLayout>
)

export async function getServerSideProps({ query }) {
  let catId = query.catid || 8;
  const res = await axios.get(`${appConfig.apiPath}/api/get/products/${catId}`);
  const data = await res.data;
  return {
    props: {
      posts: data
    }
  }
}
export default Products