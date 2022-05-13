import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import * as Components from 'components/Atoms';
import * as S from './styles';
import IEspecificMagicProps from './IEspecificMagic';
import { api } from 'services/api';
import { useNavigate } from 'react-router-dom';

function EspecificMagic() {
  const [response, setResponse] = useState<IEspecificMagicProps>();
  const navigate = useNavigate();

  const getMagic = async (dado: any) => {
    try {
      const token = JSON.parse(dado);
      const { REACT_APP_TOKEN } = process.env;

      if (token === REACT_APP_TOKEN) {
        const response = await api.get<IEspecificMagicProps>('/spells');

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

  const handleRedirect = () => {
    navigate('/create-magic');
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
      <S.Title>Especificações das Magias</S.Title>
      <S.ContainerButton>
        <Button variant="contained" onClick={handleRedirect}>
          Criar uma magia
        </Button>
      </S.ContainerButton>
      <Components.TableEspecific spells={response?.spells} />
    </S.Container>
  );
}

export { EspecificMagic };
