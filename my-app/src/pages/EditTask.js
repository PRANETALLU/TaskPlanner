import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";

const EditTask = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [deadline, setDeadline] = useState("");
    const [priority, setPriority] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:8080/task/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setName(data.name);
            setDeadline(data.deadline);
            setPriority(data.priority);
        })();
    }, []);

    const updateTask = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8080/task/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                deadline,
                priority
            })
        })
        if(response.ok) {
            navigate("/");
        }
    };

    return (
        <div className="EditTask">
            <form onSubmit={updateTask}>
                <Stack direction='column' sx={{ alignItems: "center", marginTop: 8 }}>
                    <Typography variant="h4" gutterBottom>
                        Edit the task
                    </Typography>
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        sx={{ width: 300 }}
                    />
                    <TextField
                        label="Deadline"
                        variant="outlined"
                        value={deadline}
                        onChange={e => setDeadline(e.target.value)}
                        sx={{ width: 300, marginTop: 2 }}
                    />
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth sx={{ marginTop: 2 }}>
                            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={priority}
                                label="Priority"
                                onChange={e => setPriority(e.target.value)}
                                sx={{ width: 300 }}
                            >
                                <MenuItem value={"Low"}>Low</MenuItem>
                                <MenuItem value={"Medium"}>Medium</MenuItem>
                                <MenuItem value={"High"}>High</MenuItem>
                            </Select>
                            <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>Submit</Button>
                        </FormControl>
                    </Box>
                </Stack>
            </form>
        </div>
    )
};

export default EditTask;