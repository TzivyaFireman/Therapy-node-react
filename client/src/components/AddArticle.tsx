import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addArticle } from '../store/slices/articleSlice';
import { AppDispatch } from '../store/store';

const AddArticlePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>('');
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Prepare the article data
    const articleData = {
      id: '', // צור מזהה ייחודי אם יש צורך
      title,
      description,
      content,
      image: image ? URL.createObjectURL(image) : '', // צור כתובת לתמונה אם הועלתה
    };

    try {
      await dispatch(addArticle(articleData) as any);
      navigate('/articles'); // Redirect after successful dispatch
    } catch (error) {
      console.error('Failed to save the article:', error);
    }
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        הוסף מאמר חדש
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: 'auto' }}>
        <TextField
          fullWidth
          label="כותרת המאמר"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="תיאור המאמר"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="תוכן המאמר"
          multiline
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          component="label"
          sx={{ marginTop: '1rem' }}
        >
          העלה תמונה
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
        </Button>
        {imagePreview && (
          <Card sx={{ maxWidth: 345, marginTop: '1rem' }}>
            <CardMedia
              component="img"
              height="200"
              image={imagePreview as string}
              alt="תמונת המאמר"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                תמונה שהועלתה
              </Typography>
            </CardContent>
          </Card>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: '1rem' }}
        >
          שמור מאמר
        </Button>
      </Box>
    </Box>
  );
}

export default AddArticlePage;
