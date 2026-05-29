import { Link as RouterLink } from 'react-router-dom';
import { Button, Link, Stack, TextField, Typography } from '@mui/material';

export default function SignInPage() {
  return (
    <Stack component="form" spacing={2}>
      <Typography color="text.secondary">Sign in to continue to the dashboard.</Typography>
      <TextField label="Email address" type="email" fullWidth />
      <TextField label="Password" type="password" fullWidth />
      <Button component={RouterLink} to="/dashboard" variant="contained" fullWidth>
        Sign in
      </Button>
      <Typography variant="body2">
        No account? <Link component={RouterLink} to="/auth/signup">Create one</Link>
      </Typography>
    </Stack>
  );
}
