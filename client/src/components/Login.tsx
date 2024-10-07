import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // כאן תוסיף את הלוגיקה שלך לכניסה
    // לדוגמה, שליחת הבקשה לשרת

    // לאחר ההצלחה, נווט לעמוד הבית
    navigate('/');
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
        כניסה
      </Typography>
      <form onSubmit={handleLogin}>
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
          התחברות
        </Button>
      </form>
    </Box>
  );
};

export default Login;
