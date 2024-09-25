import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Box, Modal } from '@mui/material';
import Article, { ArticleProps } from './article';
import AddArticleButton from './AddArticleButton';
import { RootState, AppDispatch } from '../store/store';
import { fetchArticles } from '../store/slices/articleSlice';

const ArticlesPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { articles, status, error } = useSelector((state: RootState) => state.articles);
  const [selectedArticle, setSelectedArticle] = useState<null | { id: string; title: string; description: string; image: string; content: string }>(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [status, dispatch]);

  const handleOpenArticle = (article: ArticleProps) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

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
              content={article.content}
              onClick={() => handleOpenArticle(article as ArticleProps)} // פתיחת המאמר במודאל
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

      {/* Modal להצגת מאמר מוגדל */}
      <Modal
        open={!!selectedArticle}
        onClose={handleCloseArticle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, // רקע מואפר
        }}
      >
        <Box sx={{ bgcolor: 'background.paper', padding: '2rem', maxWidth: '600px', borderRadius: '10px' }}>
          {selectedArticle && (
            <>
              <img src={selectedArticle.image} style={{ width: '100%', marginBottom: '1rem' }} />
              <Typography variant="body1">
                {selectedArticle.content}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default ArticlesPage;
