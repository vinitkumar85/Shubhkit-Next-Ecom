import { useRouter } from 'next/router'
import axios from 'axios';
import Head from 'next/head';
import MainLayout from '../../components/layout/mainlayout';
import appConfig from '../../appconfig';

const posts = [
  { "sku": 'SKPR1' },
  { "sku": 'SKPR2' },
  { "sku": 'SKSP2' },
  { "sku": 'SKSP5' },
  { "sku": 'SKAB1' },
  { "sku": 'SKAG2' },
]

const bagClick = () => console.log('Add to bag')

const product = (props) => {
  const router = useRouter()

  if (!props.post) return <p>No result</p>

  return (
    <MainLayout>
      <Head>
        <title>Shubhkit - {props.post.meta_title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keyword" content={props.post.meta_keyword} />
      </Head>
      <h1>{props.post.name}</h1>
      <p>Price : {props.post.price} INR</p>
      <p dangerouslySetInnerHTML={{ __html: props.post.desc }}></p>
      <button onClick={bagClick}>Add to Bag</button>
    </MainLayout>
  )
}

export async function getStaticPaths() {
  const paths = posts.map(post => ({
    params: { sku: post.sku }
  }))
  return {
    fallback: true,
    paths: paths
  }
}

export async function getStaticProps({ params }) {
  let skuId = params.sku;
  let data;
  try {
    const res = await axios.get(`${appConfig.basePath}/rest/V1/products/${skuId}`,
      {
        headers: { 'Authorization': `Bearer ${appConfig.secretToken}` }
      }
    )
    data = await res.data;
  } catch (e) {
    data = { name: 'test', price: '20' };
  }

  return {
    props: {
      post: data
    }
  }
}

export default product;