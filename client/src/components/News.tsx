import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '2rem',
  padding: '1rem',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: '2rem',
  background: 'linear-gradient(to right, #00f260, #0575E6, #6a11cb)',
  minHeight: '100vh',
}));

const news = [
  {
    id: 1,
    title: "שירות חדש במרכז",
    description: "החל מהחודש הבא אנו מציעים טיפולים ייחודיים...",
    image: "/images/pianoroom.png",
    link: "/news/1"
  },
  {
    id: 2,
    title: "מטפל חדש הצטרף לצוות",
    description: "ברוך הבא למטפל החדש שלנו...",
    image: "/images/birds.jpg",
    link: "/news/2"
  },
  {
    id: 3,
    title: "סדנה בנושא רגשות",
    description: "בקרוב נפתח סדנה חדשה לניהול רגשות...",
    image: "/images/boat.jpg",
    link: "/redflowers/3"
  },
];

const NewsPage: React.FC = () => {
  return (
    <StyledBox>
      <Typography 
        variant="h3" 
        gutterBottom 
        sx={{ textAlign: 'center', fontWeight: 'bold', color: '#fff', marginBottom: '2rem' }}
      >
        חדשות המרכז
      </Typography>
      <Grid container spacing={4}>
        {news.map((newsItem) => (
          <Grid item xs={12} key={newsItem.id}>
            <StyledCard>
              <CardMedia
                component="img"
                height="150"
                image={newsItem.image}
                alt={newsItem.title}
                sx={{ width: '150px', marginRight: '1rem', borderRadius: '10px' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ff6b6b' }}>
                  {newsItem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {newsItem.description}
                </Typography>
              </CardContent>
              <Button
                size="small"
                color="secondary"
                href={newsItem.link}
                sx={{ marginLeft: 'auto', fontWeight: 'bold' }}
              >
                קרא עוד
              </Button>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
}

export default NewsPage;
