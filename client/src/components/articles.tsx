import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Box } from '@mui/material';
import Article from './Article';
import AddArticleButton from './AddArticleButton';
import { RootState, AppDispatch } from '../store/store';
import { fetchArticles } from '../store/slices/articleSlice';

const ArticlesPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { articles, status, error } = useSelector((state: RootState) => state.articles);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Article
              id={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
              link={article.link}
            />
          </Grid>
        ))}
        <Grid width={30} item xs={12} sm={6} md={4}>
          <AddArticleButton />
        </Grid>
      </Grid>
    );
  } else if (status === 'failed') {
    content = <div>Error: {error}</div>;
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        מאמרים
      </Typography>
      {content}
    </Box>
  );
}

export default ArticlesPage;
