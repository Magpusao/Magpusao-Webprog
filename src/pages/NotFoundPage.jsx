import { Link as RouterLink } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

export default function NotFoundPage() {
  return (
    <Stack spacing={2} alignItems="flex-start">
      <Typography variant="h3" fontWeight={700}>
        Page not found
      </Typography>
      <Typography color="text.secondary">The page you requested does not exist.</Typography>
      <Button component={RouterLink} to="/" variant="contained">
        Go home
      </Button>
    </Stack>
  );
}
