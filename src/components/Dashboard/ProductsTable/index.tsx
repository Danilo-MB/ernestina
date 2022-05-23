import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '../../../commons/Button';
import { Product } from '../../../interfaces';

const ProductsTable = ({ list }) => {

    return (
        <TableContainer sx={{ backgroundColor: 'transparent' }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell align="right">Categoria</TableCell>
                        <TableCell align="right">Descripción</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((element: Product, index: number) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {element['product_title']}
                            </TableCell>
                            <TableCell align="right">{element['product_category']}</TableCell>
                            <TableCell align="right">{element['product_description']}</TableCell>
                            <TableCell align="right">
                                <Button
                                    children='Editar'
                                    onClick={(element) => console.log(element['id'])}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductsTable;