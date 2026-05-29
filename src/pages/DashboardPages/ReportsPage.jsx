import { Grid, Paper, Stack, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { quarters, seriesA, seriesB } from './dashboardData';

export default function ReportsPage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h5" fontWeight={700}>
        Reports
      </Typography>
      <Grid container spacing={2}>
        {['Active Users', 'Completed Tasks', 'Pending Reviews'].map((label, index) => (
          <Grid item xs={12} md={4} key={label}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography color="text.secondary" variant="body2">
                {label}
              </Typography>
              <Typography variant="h4" fontWeight={700}>
                {[128, 74, 16][index]}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Quarterly Report
        </Typography>
        <LineChart
          height={360}
          xAxis={[{ scaleType: 'point', data: quarters }]}
          series={[
            { data: seriesA, label: 'Series 1' },
            { data: seriesB, label: 'Series 2' },
          ]}
        />
      </Paper>
    </Stack>
  );
}
