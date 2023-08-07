import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Typography, Alert, Stack, Avatar } from "@mui/material";
import useAuth from '../../Hooks/useAuth';




const columns = [
  { id: 'photoURL', label: 'User Icon', minWidth: 170 },
  { id: 'displayName', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Gmail', minWidth: 170 },
  { id: 'role', label: 'Role', minWidth: 170 },
  { id: 'Button1', label: 'Admin Button', minWidth: 170 },
  { id: 'Button2', label: 'Instructor Button', minWidth: 170 },
  
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}




const DashboardAdmin = () => {
  const { admin, logOut, user } = useAuth();
  const [email, setEmail] = useState("");
  const [users,setUsers] = useState([]);
  const [success, setSuccess] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = [
    createData(`${user?.photoURL}, ${user?.displayName
    }, ${<Button
    id="button"
    type="submit"
  variant="outlined"
    color="success"
    sx={{ marginLeft: "2rem" }}
    >
    Make Admin
    </Button>}, 3287263`),
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];

  // find users from database
  React.useEffect(()=>{
    fetch('https://artsoul.onrender.com/findusers')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  
  const handleOnSubmit = () => {
    const user = { email };
    // send to the server
    fetch("https://artsoul.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    
  };
  const handleInstructor = () => {
    const user = { email };
    // send to the server
    fetch("https://artsoul.onrender.com/users/instructor", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    
  };
  
  return (

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {users.map((filterUser)=>{
                      if(filterUser.email === row.email){
                        return (
                          <>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Avatar alt={filterUser.displayName} src={filterUser.photoURL} />
                              
                            </Stack>
                          </TableCell>
                          <TableCell variant="subtitle2" noWrap align="left">{filterUser.displayName}</TableCell>
                          <TableCell align="left">{filterUser.email}</TableCell>
                          <TableCell align="left">{filterUser.role?filterUser.role:'student'}</TableCell>
                          <TableCell align="center">
                          {filterUser.role === "admin"? <Button
                          disabled
                          variant="outlined"
                            color="success"
                            
                            >
                            Make Admin
                            </Button>:<>
                            <Button
                            onClick={()=>{ handleOnSubmit(); setEmail(filterUser.email); }}
                          variant="outlined"
                            color="success"
                            
                            >
                            Make Admin
                            </Button>
                            {success && <Alert severity="success">Made Admin successfully!</Alert>}
                            </>  
                            }
                            </TableCell>
                            
                          <TableCell align="center">
                          {filterUser.role === "instructor"?<Button
                          disabled
                          variant="outlined"
                            color="success"
                            
                            >
                            Make Instructor
                            </Button>:<>
                            
                            <Button
                            onClick={()=>{ handleInstructor(); setEmail(filterUser.email); }}
                          variant="outlined"
                            color="success"
                            
                            >
                            Make Instructor
                            </Button>
                            {success && <Alert severity="success">Made Instructor successfully!</Alert>}
                              </>
                            }

                            
                            </TableCell>
                          </>
                        )
                      }
                    })}
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DashboardAdmin;
