import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../store/actions/productActions';
import Paginate from '../components/Paginate';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Product from '../components/Product';
import Meta from '../components/Meta';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const keyword = params.keyword;
  const pageNumber = params.pageNumber || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword && <ProductCarousel />}
      {keyword && <Link to='/' className='btn btn-light'>Go back</Link>}
      <h1 className='fugaz'>Products</h1>
      {loading && !error && <Loader />}
      {!loading && error && <Message variant='danger'>{error}</Message>}
      {!loading && !error && (
        <>

          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} key={product._id} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
