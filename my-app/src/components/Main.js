import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const Main = () => {
    const [tasks, setTasks] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:8080/allTasks', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            console.log(JSON.stringify(tasks));
            setTasks(data);
        })();
    }, []);

    const deleteTask = async (id) => {
        console.log("ID " + id);
        const response = await fetch(`http://localhost:8080/task/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
    };


    return (
        <div className="Main">
            <Button variant="contained" endIcon={<AddIcon />} sx={{ backgroundColor: "red", marginTop: 3, marginBottom: 2, marginLeft: 4 }} href="/addTask">
                Add
            </Button>
            <TableContainer component={Paper} sx={{ width: 1400, marginLeft: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "black" }}>
                        <TableRow sx={{ color: "white" }}>
                            <TableCell sx={{ color: "white" }}>Name</TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>Deadline</TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>Priority</TableCell>
                            <TableCell align="right" sx={{ color: "white" }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.deadline}</TableCell>
                                <TableCell align="right">{row.priority}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete" sx={{ color: '#ff0000' }} onClick={() => deleteTask(row.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton color="primary" href={`/editTask/${row.id}`}>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Main; 