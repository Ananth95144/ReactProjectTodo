import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

const Todo = () => {
    let [todo, valfun] = useState('')
    let [alertvar,alertfun]=useState(false)    

    let postTodo = () => {
        axios.post(' http://localhost:3000/posts', { todo })
            .then(() => {
                valfun('')
                alertfun(true)
                setTimeout(() => {
                    alertfun(false)
                } , 3000)
            })
            .catch((errvariable) => {
                console.error(errvariable);
            })
            
    }
    return (
        <div>
            
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField fullWidth label="fullWidth" id="fullWidth"
                    value={todo}
                    onChange={(para)=>valfun(para.target.value)} />
                <Button variant="contained" onClick={postTodo}>Contained</Button>
            </Box>
            <div> <p>{todo}</p>   </div>    {/* only for checking  don't  need */}
            {/* javascript */}
            {alertvar && (
                <div style={{
                    position: "fixed",
                    top: "20px",
                    right: "20px",
                    zIndex: 9999
                }}>
                    <Alert severity="success" variant="filled">
                        Todo Added Successfully!
                    </Alert>
                </div>
            )}
            
        </div>
    )
}

export default Todo