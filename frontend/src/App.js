import {BrowserRouter as Router} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './Routes'

import './styles/index.scss';
import './styles/bootstrap.min.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3  '>
        <Container>
          {routes}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
