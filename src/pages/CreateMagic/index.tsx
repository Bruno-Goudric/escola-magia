import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import * as Components from 'components/Atoms';
import * as S from './styles';
import { api } from 'services/api';

function CreateMagic() {
  const [nameMagic, setNameMagic] = useState('');
  const [typeMagic, setTypeMagic] = useState('');
  const navigate = useNavigate();
  const handleSubmit = () => {
    const info = {
      name: `${nameMagic}`,
      type: `${typeMagic}`,
    };

    api
      .post('/spells', info)
      .then(response =>
        response.status === 200
          ? toast.success('Magia cadastrada com sucesso')
          : toast.error('Magia não foi cadastrada, por favor tente mais tarde'),
      )
      .finally(() => {
        setNameMagic('');
        setTypeMagic('');
      });
  };

  const validaLogin = (dado: any) => {
    const formatDado = JSON.parse(dado);
    const { REACT_APP_TOKEN } = process.env;

    if (formatDado !== REACT_APP_TOKEN) {
      navigate('/');
    }
  };

  useEffect(() => {
    const key = localStorage.getItem('token');
    validaLogin(key);
  }, []);

  return (
    <S.Container>
      <Components.Menu />
      <ToastContainer newestOnTop />
      <ToastContainer newestOnTop />
      <Components.HeaderComponent top="20px" />

      <S.Content>
        <S.Title>Crie sua Magia</S.Title>
        <TextField
          id="outlined-basic"
          sx={{ marginBottom: 2, marginTop: 1 }}
          name="name"
          value={nameMagic}
          type="text"
          label="Nome"
          variant="outlined"
          onChange={e => setNameMagic(e.currentTarget.value)}
        />
        <TextField
          id="outlined-basic"
          sx={{ marginBottom: 2, marginTop: 1 }}
          value={typeMagic}
          name="type"
          type="text"
          label="Tipo"
          variant="outlined"
          onChange={e => setTypeMagic(e.currentTarget.value)}
        />
        <Button variant="contained" type="button" onClick={handleSubmit}>
          Cadastrar
        </Button>
      </S.Content>
    </S.Container>
  );
}

export { CreateMagic };
