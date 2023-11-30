import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { API } from '../Api';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function ExpTable() {

    const [expData, setExpData] = useState([]);
    const navigate = useNavigate();
    const val = { email: 'saravanakumar@gmail.com' }
    const getExpenses = () => {

        axios.get(`${API}/expenses`).then((expenses) => setExpData(expenses.data));
    }
    console.log(expData);

    useEffect(() => getExpenses(), []);

    const deleteExp = (expId) => {
        fetch(`${API}/expenses/${expId}`, {
            method: "DELETE"
        }).then((dt) => getExpenses());
    };

    return (
        <TableContainer component={Paper} className='exp-table'>
            <h3>Expenses History</h3>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell >Expense Description</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Modify/Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expData.map((row, index) => (
                        <TableRow
                            // key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {row.Expdate}
                            {/* {expData.Expdate} */}
                            </TableCell>
                        <TableCell>
                            {row.expdesc}
                            {/* {expData.expdesc} */}
                        </TableCell>
                        <TableCell>
                            {row.Expamount}
                        </TableCell>
                            <TableCell>
                                <IconButton onClick={() => navigate(`/expenses/edit/${row._id}`)}>
                                    <EditIcon color='primary' />
                                </IconButton>
                                <IconButton color='error'
                                    onClick={() => deleteExp(row._id)}
                                ><DeleteIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                     ))} 
                </TableBody>
            </Table>
        </TableContainer>
    );
}