import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Magpusao Client
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 680 }}>
          A component-based React application with public pages, authentication screens, and a Material UI dashboard.
        </Typography>
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button component={RouterLink} to="/dashboard" variant="contained">
          Open dashboard
        </Button>
        <Button component={RouterLink} to="/articles" variant="outlined">
          View articles
        </Button>
      </Stack>
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Web App Initialization
        </Typography>
        <Typography color="text.secondary">
          This client follows the requested routes, layouts, reusable components, and MUI dashboard pages.
        </Typography>
      </Paper>
    </Stack>
  );
}
