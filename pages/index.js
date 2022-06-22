import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components'
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => (
  <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div class="products-heading">
      <h2>This Week's Flavors</h2>
      <p>Check out our flavors for the week</p>
    </div>

    <div class="flex flex-wrap justify-center gap-4 mt-4 w-full">
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
