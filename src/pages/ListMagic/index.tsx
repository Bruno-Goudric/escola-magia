import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { api } from 'services/api';
import IListMagic from './IListMagic';

import * as Components from 'components/Atoms';

import * as S from './styles';

function ListMagic() {
  const [response, setResponse] = useState<IListMagic>();
  const navigate = useNavigate();
  const getMagic = async (dado: any) => {
    try {
      const token = JSON.parse(dado);
      const { REACT_APP_TOKEN } = process.env;

      if (token === REACT_APP_TOKEN) {
        const response = await api.get<IListMagic>('/spells');

        const resp = response.data;

        resp.spells.sort(function (a, b) {
          return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
        });

        setResponse(resp);
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error('Passamos por uma instabilidade, por favor tente mais tarde');
    }
  };

  useEffect(() => {
    const key = localStorage.getItem('token');
    getMagic(key);
  }, []);

  return (
    <S.Container>
      <ToastContainer newestOnTop />
      <Components.Menu />
      <Components.HeaderComponent top="20px" />
      <S.Title>Lista de Magias</S.Title>
      <Components.TableComponent spells={response?.spells} />
    </S.Container>
  );
}

export { ListMagic };
