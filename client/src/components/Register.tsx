import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { registerUser } from '../store/slices/userSlice';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(registerUser({ username, email, password })).unwrap();
      navigate('/'); // נווט לאחר הצלחת ההרשמה
    } catch (error) {
      console.error('Failed to register user:', error);
    }
  };


  return (
    <Box
      sx={{
        width: '50%',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: '100px',
        padding: '2rem',
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#f9f9f9'
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
        הרשמה
      </Typography>
      <form onSubmit={handleRegister}>
        <TextField
          label="שם משתמש"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="כתובת מייל"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="סיסמה"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: '1rem' }}
        >
          הרשמה
        </Button>
      </form>
    </Box>
  );
};

export default Register;
