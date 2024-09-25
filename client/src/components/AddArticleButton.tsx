import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const AddArticleButton: React.FC = () => {
  const handleClick = () => {
    // כאן תוכל לכתוב את הקוד למעבר לעמוד הוספת מאמר, לדוגמה עם React Router
    window.location.href = '/addarticle'; // או השתמש ב-Navigate מ-React Router
  };

  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer' }} onClick={handleClick}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="div">
          הוסף מאמר חדש
        </Typography>
        <Box sx={{ mt: 2 }}>
          {/* עיצוב מותאם אישית, ניתן להוסיף אייקון או תמונה */}
          <Typography variant="body2" color="text.secondary">
            לחץ כאן כדי להוסיף מאמר חדש
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AddArticleButton;
