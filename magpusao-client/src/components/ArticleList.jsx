import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Card, CardActions, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import { fetchArticles } from '../services/ArticleService';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    fetchArticles()
      .then((data) => {
        if (mounted) {
          setArticles(data.filter((article) => article.status === 'active'));
        }
      })
      .catch((fetchError) => {
        if (mounted) {
          setError(fetchError.message || 'Unable to load articles.');
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Grid container spacing={2}>
      {articles.map((article) => (
        <Grid item xs={12} md={4} key={article.slug}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {article.title}
              </Typography>
              <Typography color="text.secondary">{article.summary}</Typography>
            </CardContent>
            <CardActions>
              <Button component={RouterLink} to={`/articles/${article.slug}`} size="small">
                Read article
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
