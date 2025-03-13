import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from 'mdb-react-ui-kit';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3 pt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="tractor" className="me-3" />
                  Nexa
                </h6>
                <p>
                  A Nexa é a plataforma ideal para facilitar o cadastro de escolas em toda a Paraíba. Com um sistema ágil, seguro e intuitivo, conectamos instituições de ensino a um banco de dados eficiente, garantindo organização e praticidade.
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Guarabira, IFPB, PB
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  nexa@gmail.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  01 234 567 88
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" /> +
                  01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </footer>
  );
};

export default Footer;
