import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {  IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/material';

const Todo = ({content, index, todos, setTodos}) => {
    const handleTodoDelete = () => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    return (
        <Stack spacing={2} direction="row" justifyContent="center">
            <Typography variant="h6">{content}</Typography>
            <IconButton onClick={handleTodoDelete} variant="outlined">
                <CheckCircleIcon sx={{color: "#55ff55"}}/>
            </IconButton>
    
        </Stack>
    )

}

export default Todo