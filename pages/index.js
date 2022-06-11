const Home = ({ products, bannerData }) => {
  return (
    <>
      HeroBanner

      <div class='products-heading'>
        <h2>Cheefa's Fried Pies</h2>
        <p>the Best Fried Pies in Town</p>
      </div>

      <div class='products-container'>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      Footer
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
