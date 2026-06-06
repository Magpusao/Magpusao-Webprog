import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Alert, Button, Grid, Link, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { createUser } from '../../services/UserService';

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: 'male',
  contactNumber: '',
  email: '',
  username: '',
  password: '',
  address: '',
};

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState(blankForm);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await createUser({
        ...form,
        role: 'editor',
        isActive: true,
      });
      navigate('/auth/signin');
    } catch (signupError) {
      setError(signupError.response?.data?.message || signupError.message || 'Sign up failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack component="form" spacing={2} onSubmit={handleSubmit}>
      <Typography color="text.secondary">Create an account for Magpusao Client.</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="First name" fullWidth value={form.firstName} onChange={(event) => handleChange('firstName', event.target.value)} required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Last name" fullWidth value={form.lastName} onChange={(event) => handleChange('lastName', event.target.value)} required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Age" fullWidth value={form.age} onChange={(event) => handleChange('age', event.target.value)} required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField select label="Gender" fullWidth value={form.gender} onChange={(event) => handleChange('gender', event.target.value)}>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Contact number" fullWidth value={form.contactNumber} onChange={(event) => handleChange('contactNumber', event.target.value)} required />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email address" type="email" fullWidth value={form.email} onChange={(event) => handleChange('email', event.target.value)} required />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Username" fullWidth value={form.username} onChange={(event) => handleChange('username', event.target.value)} required />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type="password" fullWidth value={form.password} onChange={(event) => handleChange('password', event.target.value)} required />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address" fullWidth value={form.address} onChange={(event) => handleChange('address', event.target.value)} required />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        {loading ? 'Creating account...' : 'Sign up'}
      </Button>
      <Typography variant="body2">
        Already registered? <Link component={RouterLink} to="/auth/signin">Sign in</Link>
      </Typography>
    </Stack>
  );
}
