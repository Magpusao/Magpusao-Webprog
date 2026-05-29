import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { BarChart, PieChart } from '@mui/x-charts';
import { DataGrid } from '@mui/x-data-grid';
import { columns, quarters, seriesA, seriesB, users } from './dashboardData';

const averageAge = users.reduce((total, user) => total + user.age, 0) / users.length;

export default function DashboardPage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h5" fontWeight={700}>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={2}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Total Users
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              {users.length}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Average Age
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              {averageAge.toFixed(1)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <BarChart
              height={280}
              xAxis={[{ scaleType: 'band', data: quarters, label: 'Quarters' }]}
              series={[
                { data: seriesA, label: 'Series 1' },
                { data: seriesB, label: 'Series 2' },
              ]}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{ p: 2, display: 'grid', placeItems: 'center', height: '100%' }}>
            <PieChart
              height={260}
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: '10' },
                    { id: 1, value: 15, label: '15' },
                    { id: 2, value: 20, label: '20' },
                  ],
                },
              ]}
            />
          </Paper>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Users Overview
        </Typography>
        <Paper variant="outlined" sx={{ height: 430 }}>
          <DataGrid rows={users} columns={columns} pageSizeOptions={[5, 10]} initialState={{ pagination: { paginationModel: { pageSize: 5 } } }} checkboxSelection />
        </Paper>
      </Box>
    </Stack>
  );
}
