import React, { useState } from 'react';
import ITable from './ITable';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CancelIcon from '@mui/icons-material/Cancel';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ToastContainer, toast } from 'react-toastify';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TableContainer from '@mui/material/TableContainer';

import * as S from './styles';
import { api } from 'services/api';
import { useNavigate } from 'react-router-dom';

interface ITableProp {
  createdAt: string;
  id: string;
  name: string;
  type: string;
  version: string;
}

function TableComponent({ spells }: ITable) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [infoMagic, setInfoMagic] = useState<Array<ITableProp>>();
  const [nameMagic, setNameMagic] = useState('');
  const [typeMagic, setTypeMagic] = useState('');
  const removeMagic = (id: string) => {
    api
      .delete('/spells', { params: { id: `${id}` } })
      .then(response =>
        response.status == 200
          ? window.location.reload()
          : toast.error(
              'No momento não foi possível realizar a remoção, tente novamente mais tarde',
            ),
      );
  };

  const editMagic = (id: string) => {
    const filterMagic = spells?.filter(element => {
      if (element.id === id) {
        const spells = [
          {
            id: element.id,
            createdAt: element.createdAt,
            name: element.name,
            type: element.type,
            version: element.version,
          },
        ];

        return spells;
      }
    });
    setInfoMagic(filterMagic);
    setOpen(true);
  };

  const alterMagic = async () => {
    const id = infoMagic?.[0].id;
    const version = infoMagic?.[0].version;

    const data = {
      id: `${id}`,
      name: `${nameMagic}`,
      type: `${typeMagic}`,
      version: `${version}`,
    };

    await api
      .put('/spells', data)
      .then(response =>
        response.status == 200
          ? window.location.reload()
          : toast.error(
              'No momento não foi possível realizar a alteração, tente novamente mais tarde',
            ),
      );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const visibleMagic = (id: string) => {
    navigate('/especific-magic');
  };
  return (
    <>
      <ToastContainer newestOnTop />
      <Paper
        sx={{ width: '1100px', border: '1px solid #000', borderRadius: 5 }}
      >
        <TableContainer sx={{ maxHeight: 550, borderRadius: 5 }}>
          <Table
            sx={{
              minWidth: 550,
              border: '1px solid #000',
              maxHeight: 250,
            }}
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 'bold', border: 1, fontSize: 18 }}
                >
                  Magias
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 'bold', border: 1, fontSize: 18 }}
                >
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {spells?.map(row => (
                <TableRow key={row.name} sx={{ '& td, & th': { border: 1 } }}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="right">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                      }}
                    >
                      <S.Button onClick={() => removeMagic(`${row.id}`)}>
                        <CancelIcon sx={{ color: 'red' }} />
                      </S.Button>
                      <S.Button onClick={() => editMagic(`${row.id}`)}>
                        <CreateIcon />
                      </S.Button>

                      <S.Button onClick={() => visibleMagic(`${row.id}`)}>
                        <VisibilityIcon />
                      </S.Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Alterar Magia'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <S.Form onSubmit={() => {}}>
              {infoMagic?.map(element => (
                <>
                  <TextField
                    sx={{ marginBottom: 2, marginTop: 1 }}
                    id=""
                    label="Nome"
                    variant="outlined"
                    onChange={e => setNameMagic(e.currentTarget.value)}
                  />

                  <TextField
                    id=""
                    label="Tipo de Magia"
                    variant="outlined"
                    onChange={e => setTypeMagic(e.currentTarget.value)}
                  />
                </>
              ))}
            </S.Form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={alterMagic}>Alterar</Button>
          <Button onClick={handleClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export { TableComponent };
