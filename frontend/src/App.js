import {Container} from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/index.scss';
import './styles/bootstrap.min.scss';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          
        </Container>
        <h1>Cheefa's Fried Pies</h1>
      </main>
      <Footer />
    </>
  );
};

export default App;
