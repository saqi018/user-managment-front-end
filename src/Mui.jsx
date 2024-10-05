import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function createData(name, age) {
  return { name, age };
}

function App() {
  const [rows, setRows] = useState([
    createData('John', 25),
    createData('Jane', 30),
    createData('Alice', 28),
    createData('Bob', 35),
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAddUser = () => {
    if (name && age) {
      setRows([...rows, createData(name, parseInt(age))]); // Add new user
      setName(''); // Reset the input fields
      setAge('');
    }
  };

  const handleButtonClick = (name) => {
    alert(`Button clicked for ${name}`);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      {/* Add User Section */}
      <Box
        sx={{
          display: 'flex', // Align in a row
          gap: 2, // Space between elements
          marginBottom: 2,
          alignItems: 'center', // Center vertically
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Age"
          variant="outlined"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddUser}
        >
          Add User
        </Button>
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper} sx={{ width: '80%', maxWidth: '600px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleButtonClick(row.name)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    style={{ marginLeft: '10px', backgroundColor: 'red' }}
                    onClick={() => handleButtonClick(row.name)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default App;
