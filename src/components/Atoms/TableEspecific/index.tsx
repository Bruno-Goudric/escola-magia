import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TableContainer from '@mui/material/TableContainer';
import ITableEspecificProps from './ITableEspecific';
import ConvertData from 'utils/ConvertData';

function TableEspecific({ spells }: ITableEspecificProps) {
  return (
    <>
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
                  Magia
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 'bold', border: 1, fontSize: 18 }}
                >
                  Tipo
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: 'bold', border: 1, fontSize: 18 }}
                >
                  Data de Criação
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {spells?.map(row => (
                <TableRow key={row.name} sx={{ '& td, & th': { border: 1 } }}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.type}</TableCell>
                  <TableCell align="left">
                    {ConvertData(row.createdAt)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export { TableEspecific };
