import { Link as RouterLink } from 'react-router-dom';
import { articles } from '../assets/article-content';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';

export default function ArticleList() {
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
