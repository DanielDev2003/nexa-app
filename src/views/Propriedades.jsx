import { MDBInput, MDBTooltip } from 'mdb-react-ui-kit';
import PropriedadesTable from '../components/PropriedadesTable';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import usePropriedade from '../context/PropriedadeContext';
import { Formik } from 'formik';


const Propriedades = () => {
  let {
    propriedades,
    setPropriedades,
    propriedadesInitialValues,
    propriedadeSchema,
    show,
    handleShow,
  } = usePropriedade();


  const handleSubmit = (values, actions) => {
    //POST, PUT e DELETE
    fetch('http://localhost:3000/instituicoes', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          // Toast.
          toast.success('Intituição cadastrada com sucesso!');
          //Adicionar na lista.
          setPropriedades([...propriedades, values]);
          //Fechar o modal.
          handleShow(!show);
        }
      })
      .catch((error) => {
        // Toast.
        toast.error('Erro ao enviar os dados: ' + error.message);
      });

    actions.setSubmitting(false);
  };
  return (
    <>
      <div>Instituições</div>

      <div>
        <Row>
          <Col>
            <MDBInput label="Buscar" id="formControlSm" type="text" size="sm" />
          </Col>
          <Col>
            <MDBTooltip tag="span" wrapperClass="d-inline-block" title="Adicionar Intituição">
              <Button onClick={handleShow}>+</Button>
            </MDBTooltip>
          </Col>
        </Row>
      </div>

      <PropriedadesTable />

      <Modal
        show={show}
        onHide={handleShow}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cadastrar</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={propriedadesInitialValues}
          validationSchema={propriedadeSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleSubmit, values }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Modal.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>Regiao</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nordeste"
                      id="Regiao"
                      name="Regiao"
                      onChange={handleChange}
                      value={values.Regiao}
                    />
                    {errors.Regiao && touched.Regiao ? (
                      <div>{errors.Regiao}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>UF</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='Paraíba'
                      id="UF"
                      name="UF"
                      onChange={handleChange}
                      value={values.UF}
                    />
                    {errors.UF && touched.UF ? (
                      <div>{errors.UF}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Municipio</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='Araruna'
                      id="Municipio"
                      name="Municipio"
                      onChange={handleChange}
                      value={values.Municipio}
                    />
                    {errors.Municipio && touched.Municipio ? (
                      <div>{errors.Municipio}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Entidade</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='EMEF JOAO ALVES'
                      id="Entidade"
                      name="Entidade"
                      onChange={handleChange}
                      value={values.Entidade}
                    />
                    {errors.Entidade && touched.Entidade ? (
                      <div>{errors.Entidade}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Matriculas</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='779'
                      id="Matriculas"
                      name="Matriculas"
                      onChange={handleChange}
                      value={values.Matriculas}
                    />
                    {errors.Matriculas && touched.Matriculas ? (
                      <div>{errors.Matriculas}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mesoregiao</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='Agreste Paraibano'
                      id="Mesoregiao"
                      name="Mesoregiao"
                      onChange={handleChange}
                      value={values.Mesoregiao}
                    />
                    {errors.Mesoregiao && touched.Mesoregiao ? (
                      <div>{errors.Mesoregiao}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Microregiao</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='Curimataú Oriental'
                      id="Microregiao"
                      name="Microregiao"
                      onChange={handleChange}
                      value={values.Microregiao}
                    />
                    {errors.Microregiao && touched.Microregiao ? (
                      <div>{errors.Microregiao}</div>
                    ) : null}
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleShow}>
                    Fechar
                  </Button>
                  <Button variant="primary" type="submit">
                    Adicionar
                  </Button>
                </Modal.Footer>
              </Form>
            );
          }}
        </Formik>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Propriedades;
