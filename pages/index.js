import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components'
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => (
  <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div class="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div class="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </>
);


export const getServerSideProps = async() => {
  const productQuery = `*[_type == "product"]`;
  const products = await client.fetch(productQuery)

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {products, bannerData}
  }
}


export default Home;
