import { Link as RouterLink, NavLink } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const links = [
  { to: '/', label: 'Home' },
  { to: '/articles', label: 'Articles' },
  { to: '/about', label: 'About' },
];

export default function NavBar() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography component={RouterLink} to="/" variant="h6" sx={{ fontWeight: 700, flexGrow: 1 }}>
          Magpusao Client
        </Typography>
        <Box component="nav" sx={{ display: 'flex', gap: 1 }}>
          {links.map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              color="inherit"
              sx={{
                '&.active': {
                  bgcolor: 'rgba(255,255,255,0.18)',
                },
              }}
            >
              {link.label}
            </Button>
          ))}
          <Button component={RouterLink} to="/auth/signin" color="inherit" variant="outlined">
            Sign in
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
