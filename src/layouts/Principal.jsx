import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';
import './Principal.css';

const Principal = () => {
  return (
    <div className="App">
      <Header></Header>
      {/* Irá mudar de acordo com a página */}
      <Container className="mt-2">
        <Outlet />
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Principal;
