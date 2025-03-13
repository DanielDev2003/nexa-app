import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';

const PropriedadesTable = ({ propriedades, setPropriedades }) => {

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

                  <MDBBtn floating tag="a" className="mx-2" color="danger">
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
