import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', py: 3, mt: 6 }}>
      <Container maxWidth="lg">
        <Typography color="text.secondary" variant="body2">
          Magpusao Client web programming activity.
        </Typography>
      </Container>
    </Box>
  );
}
