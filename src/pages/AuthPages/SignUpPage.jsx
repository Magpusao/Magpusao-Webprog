import { Link as RouterLink } from 'react-router-dom';
import { Button, Link, Stack, TextField, Typography } from '@mui/material';

export default function SignUpPage() {
  return (
    <Stack component="form" spacing={2}>
      <Typography color="text.secondary">Create an account for Magpusao Client.</Typography>
      <TextField label="Full name" fullWidth />
      <TextField label="Email address" type="email" fullWidth />
      <TextField label="Password" type="password" fullWidth />
      <Button component={RouterLink} to="/dashboard" variant="contained" fullWidth>
        Sign up
      </Button>
      <Typography variant="body2">
        Already registered? <Link component={RouterLink} to="/auth/signin">Sign in</Link>
      </Typography>
    </Stack>
  );
}
