import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Alert, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { loginUser } from '../../services/UserService';

export default function SignInPage() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setCredentials((currentCredentials) => ({ ...currentCredentials, [field]: value }));
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await loginUser(credentials);
      const role = data.type || data.user?.role;

      if (role === 'viewer') {
        setError('Viewers cannot access the dashboard.');
        return;
      }

      window.localStorage.setItem(
        'magpusao-auth',
        JSON.stringify({
          token: data.token,
          type: role,
          firstName: data.firstName || data.user?.firstName || 'User',
        }),
      );
      navigate('/dashboard');
    } catch (loginError) {
      setError(loginError.response?.data?.message || loginError.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack component="form" spacing={2} onSubmit={handleSubmit}>
      <Typography color="text.secondary">Sign in to continue to the dashboard.</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Email or username"
        fullWidth
        value={credentials.email}
        onChange={(event) => handleChange('email', event.target.value)}
        required
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={credentials.password}
        onChange={(event) => handleChange('password', event.target.value)}
        required
      />
      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        {loading ? 'Signing in...' : 'Sign in'}
      </Button>
      <Typography variant="body2">
        No account? <Link component={RouterLink} to="/auth/signup">Create one</Link>
      </Typography>
    </Stack>
  );
}
