import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';

export default function AuthLayout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', p: 2, bgcolor: 'background.default' }}>
      <Paper variant="outlined" sx={{ width: '100%', maxWidth: 420, p: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Magpusao Client
        </Typography>
        <Outlet />
        <Button component={RouterLink} to="/" fullWidth sx={{ mt: 2 }}>
          Back to home
        </Button>
      </Paper>
    </Box>
  );
}
