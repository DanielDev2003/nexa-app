import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import usePropriedade from '../context/PropriedadeContext';
import { toast } from 'react-toastify';

const PropriedadesTable = () => {
  let { propriedades, setPropriedades } = usePropriedade();


  const handleDelete = (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta instituição?')) {
      return;
    }

    fetch(`http://localhost:3000/instituicoes/${id}`, {
      method: 'DELETE',
      mode: 'cors',
    })
      .then((response) => {
        if (response.ok) {
          setPropriedades(propriedades.filter(prop => prop.id !== id));
        } else {
          console.error('Erro ao excluir a instituição.');
        }
      })
      .catch((error) => {
        console.error('Erro na requisição DELETE:', error);
      });
  };
  const getPropriedades = (event) => {
    fetch('http://localhost:3000/instituicoes')
      .then((response) => response.json())
      .then((data) => {
        setPropriedades([...data]);
      })
      .catch((error) => {
        console.log('Deu erro!');
      });
  };

  useEffect(getPropriedades, []);

  return (
    <>
      <MDBTable hover>
        <MDBTableHead>
          <tr>
            <th scope="col">Regiao</th>
            <th scope="col">UF</th>
            <th scope="col">Municipio</th>
            <th scope="col">Entidade</th>
            <th scope="col">Matriculas</th>
            <th scope="col">Mesoregiao</th>
            <th scope="col">Microregiao</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {propriedades.map((propriedades, i) => {
            return (
              <tr key={i}>
                <td>{propriedades.Regiao}</td>
                <td>{propriedades.UF}</td>
                <td>{propriedades.Municipio}</td>
                <td>{propriedades.Entidade}</td>
                <td>{propriedades.Matriculas}</td>
                <td>{propriedades.Mesoregiao}</td>
                <td>{propriedades.Microregiao}</td>
                <td>
                  <MDBBtn floating tag="a" className="mx-2">
                    <MDBIcon fas icon="pen" />
                  </MDBBtn>

                  <MDBBtn floating tag="a" className="mx-2" color="danger" onClick={() => handleDelete(propriedades.id)}>
                    <MDBIcon fas icon="trash-alt" />
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default PropriedadesTable;
