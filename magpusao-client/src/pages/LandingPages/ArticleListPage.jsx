import { Stack, Typography } from '@mui/material';
import ArticleList from '../../components/ArticleList.jsx';

export default function ArticleListPage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={700}>
        Articles
      </Typography>
      <ArticleList />
    </Stack>
  );
}
