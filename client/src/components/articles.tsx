import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import Article, { ArticleProps } from './Article';

const articles: ArticleProps[] = [
  {
    id: 1,
    title: "ניגון הנשמה",
    description: "לחיות את החיים הפנימיים ברובד עמוק יותר.",
    image: "/images/piano.png",
    link: "/articles/1"
  },
  {
    id: 2,
    title: "פחד קהל",
    description: "כך תתמודדו עם פחד הקהל שלכם.",
    image: "/images/cats.jpg",
    link: "/articles/2"
  },
  {
    id: 3,
    title: "כוחם של רגשות",
    description: "איך הרגשות משפיעים על חיינו היומיומיים?",
    image: "/images/redflowers.jpg",
    link: "/articles/3"
  },
  {
    id: 4,
    title: "אמנות ההתבוננות",
    description: "למדו איך לפתח מודעות עצמית באמצעות התבוננות פנימית.",
    image: "/images/boo.png",
    link: "/articles/4"
  }
];

const ArticlesPage: React.FC = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        מאמרים
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Article 
              id = { article.id }
              title={article.title}
              description={article.description}
              image={article.image}
              link={article.link}
        
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ArticlesPage;
