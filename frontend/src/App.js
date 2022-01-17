import {Container} from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/index.scss';
import './styles/bootstrap.min.scss';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3  '>
        <Container>
          <h1>Cheefa's Fried Pies</h1> 
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
