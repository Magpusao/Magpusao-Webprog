import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Alert, Button, CircularProgress, Stack, Typography } from '@mui/material';
import { fetchArticles } from '../../services/ArticleService';

export default function ArticlePage() {
  const { name } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    fetchArticles()
      .then((data) => {
        if (mounted) {
          setArticle(data.find((item) => item.status === 'active' && item.slug === name) || null);
        }
      })
      .catch((fetchError) => {
        if (mounted) {
          setError(fetchError.message || 'Unable to load article.');
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
  }, [name]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!article) {
    return (
      <Stack spacing={2}>
        <Typography variant="h4" fontWeight={700}>
          Article not found
        </Typography>
        <Button component={RouterLink} to="/articles" variant="contained">
          Back to articles
        </Button>
      </Stack>
    );
  }

  return (
    <Stack spacing={2} sx={{ maxWidth: 760 }}>
      <Typography variant="h4" fontWeight={700}>
        {article.title}
      </Typography>
      <Typography color="text.secondary">By {article.author}</Typography>
      <Typography>{article.body}</Typography>
    </Stack>
  );
}
