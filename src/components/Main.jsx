import { Container } from 'react-bootstrap';
import PropriedadesCard from './PropriedadesCard';
import Carrosel from './Carrosel';

const Main = () => {
  return (
    <main>
      <Container fluid className="mt-2">
        {/* Propriedades */}
        <Carrosel />
      </Container>
    </main>
  );
};

export default Main;
