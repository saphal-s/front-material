import React,{useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Container, Paper, Typography,Box, Button, TableContainer,Table,
     TableHead, TableCell, TableRow,TableBody,
    TablePagination,

    } from '@material-ui/core'

import axios from 'axios'
const useStyle = makeStyles((theme)=>({
    root:{
        width:'100vw',
        height:'100vh',
        backgroundColor:theme.palette.grey[200],
        paddingTop:'50px'
    }
}))
function Tables() {
    const classes = useStyle()
    const [users,setUsers]=useState([]);

    const [page,setPage]=useState(0);
    const[rowsPerPage,setRowsPerPage] = useState(3);

    const onChangePage = (event,nextPage)=>{
        setPage(nextPage)
    }

    const loadUsers = async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data)
    }
useEffect(()=>{
    loadUsers()
},[])
const onChangeRowsPerPage =(event)=>{
    setRowsPerPage(event.target.value);
}
    return (
        <Container  className={classes.root}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Website</TableCell>
                    </TableHead>
                    <TableBody>
                        {users.slice(page*rowsPerPage,page *rowsPerPage + rowsPerPage)
                        .map((user)=>(
                             <TableRow>
                             <TableCell>{user.name}</TableCell>
                             <TableCell>{user.email}</TableCell>
                             <TableCell>{user.phone}</TableCell>
                             <TableCell>{user.website}</TableCell>
                             </TableRow>
                        ))}
                       
                    </TableBody>
                </Table>
                <TablePagination
                rowsPerPageOptions={[3,5,10,15] }
                count = {users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage = {onChangePage}
                onChangeRowsPerPage={onChangeRowsPerPage}
                />
            </TableContainer>
            
        </Container>
    )
}

export default Tables
