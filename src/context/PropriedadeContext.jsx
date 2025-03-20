import { createContext, useContext, useState } from 'react';
import * as yup from 'yup';

const PropriedadeContext = createContext();

export function PropriedadeContextProvider({ children }) {
    let [propriedades, setPropriedades] = useState([]);

    let [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    let propriedadesInitialValues = {
        Regiao: '',
        UF: '',
        Municipio: '',
        Entidade: '',
        Matriculas: '',
        Mesoregiao: '',
        Microregiao: ''
    };

    const propriedadeSchema = yup.object().shape({
        Regiao: yup.string().required('Região é obrigatória'),
        UF: yup.string().required('UF é obrigatória'),
        Municipio: yup.string().required('Município é obrigatório'),
        Entidade: yup.string().required('Entidade é obrigatória'),
        Matriculas: yup.number().typeError('Deve ser um número').required('Matrículas são obrigatórias'),
        Mesoregiao: yup.string().required('Mesorregião é obrigatória'),
        Microregiao: yup.string().required('Microrregião é obrigatória')
    });

    return (
        <PropriedadeContext.Provider
            value={{
                propriedades,
                setPropriedades,
                propriedadesInitialValues,
                propriedadeSchema,
                show,
                handleShow,
            }}
        >
            {children}
        </PropriedadeContext.Provider>
    );
}

export default function usePropriedade() {
    return useContext(PropriedadeContext);
}
