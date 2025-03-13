import { MDBInput, MDBTooltip } from 'mdb-react-ui-kit';
import PropriedadesTable from '../components/PropriedadesTable';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from 'yup';

const Propriedades = () => {
  const [propriedades, setPropriedades] = useState([]);
  const notify = () => toast.success('Adicionado com sucesso!');
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});

  const handleShow = () => setShow(!show);

  const [inputs, setInputs] = useState({
    Regiao: '',
    UF: '',
    Municipio: '',
    Entidade: '',
    Matriculas: '',
    Mesoregiao: '',
    Microregiao: ''
  });

  const instituicaoSchema = yup.object().shape({
    Regiao: yup.string().required('Região é obrigatória'),
    UF: yup.string().required('UF é obrigatória'),
    Municipio: yup.string().required('Município é obrigatório'),
    Entidade: yup.string().required('Entidade é obrigatória'),
    Matriculas: yup.number().typeError('Deve ser um número').required('Matrículas são obrigatórias'),
    Mesoregiao: yup.string().required('Mesorregião é obrigatória'),
    Microregiao: yup.string().required('Microrregião é obrigatória')
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });

    // Limpa erro ao digitar no campo correspondente
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Validação antes de enviar
      await instituicaoSchema.validate(inputs, { abortEarly: false });

      // POST para o servidor
      fetch('http://localhost:3000/instituicoes', {
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      })
        .then((response) => {
          if (response.ok) {
            setPropriedades([...propriedades, inputs]);
            notify();
            setShow(false);
          }
        })
        .catch((error) => console.error('Erro ao adicionar:', error));

      setErrors({});
    } catch (err) {
      // Captura e exibe erros de validação
      let validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
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
            <MDBTooltip tag="span" wrapperClass="d-inline-block" title="Adicionar Propriedade">
              <Button onClick={handleShow}>+</Button>
            </MDBTooltip>
          </Col>
        </Row>
      </div>

      <PropriedadesTable propriedades={propriedades} setPropriedades={setPropriedades} />

      <Modal show={show} onHide={handleShow} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {Object.entries(inputs).map(([key, value]) => (
              <Form.Group className="mb-3" key={key}>
                <Form.Label>{key}</Form.Label>
                <Form.Control
                  type={key === 'Matriculas' ? 'number' : 'text'}
                  placeholder={`Digite ${key}`}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  isInvalid={!!errors[key]}
                />
                <Form.Control.Feedback type="invalid">{errors[key]}</Form.Control.Feedback>
              </Form.Group>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>Fechar</Button>
            <Button variant="primary" type="submit">Adicionar</Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Propriedades;
