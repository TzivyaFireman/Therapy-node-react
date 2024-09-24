import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { Phone, Mail } from '@mui/icons-material';

const ContactPage: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        יצירת קשר
      </Typography>
      
      {/* פרטי יצירת קשר */}
      <Paper elevation={3} sx={{ padding: '2rem', marginBottom: '2rem' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          פרטי יצירת קשר
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <Phone sx={{ marginRight: '0.5rem' }} />
          <Typography variant="body1">053-3140971</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Mail sx={{ marginRight: '0.5rem' }} />
          <Typography variant="body1">shalvagmura@gmail.com</Typography>
        </Box>
      </Paper>
      
      {/* טופס יצירת קשר */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        שלח לנו הודעה
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        <TextField
          label="שם מלא"
          variant="outlined"
          required
        />
        <TextField
          label="אימייל"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          label="הודעה"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          שלח
        </Button>
      </Box>
    </Box>
  );
}

export default ContactPage;
