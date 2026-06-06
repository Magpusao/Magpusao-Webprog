import { Stack, Typography } from '@mui/material';

export default function AboutPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4" fontWeight={700}>
        About
      </Typography>
      <Typography color="text.secondary">
        This application was built for the Web Programming activity using React, React Router, Vite, and Material UI.
      </Typography>
    </Stack>
  );
}
