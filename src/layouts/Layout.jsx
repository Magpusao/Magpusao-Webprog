import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';

export default function Layout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <Container component="main" maxWidth="lg" sx={{ py: 5, flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}
