import { Link as RouterLink, useParams } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { articles } from '../../assets/article-content';

export default function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((item) => item.slug === name);

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
