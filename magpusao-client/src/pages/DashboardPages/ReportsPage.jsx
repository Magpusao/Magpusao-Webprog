import { useRef } from 'react';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';
import { quarters, seriesA, seriesB } from './dashboardData';

export default function ReportsPage() {
  const printRef = useRef(null);

  const handlePrint = () => {
    const reportContent = printRef.current;

    if (!reportContent) {
      return;
    }

    const printWindow = window.open('', '_blank', 'width=1100,height=800');

    if (!printWindow) {
      window.print();
      return;
    }

    const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map((node) => node.outerHTML)
      .join('');

    printWindow.document.write(`
      <!doctype html>
      <html>
        <head>
          <title>Magpusao Admin Report</title>
          ${styles}
          <style>
            body { margin: 0; padding: 24px; font-family: Arial, Helvetica, sans-serif; }
            .report-actions { display: none !important; }
          </style>
        </head>
        <body>${reportContent.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <Stack spacing={3}>
      <Box className="report-actions" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Typography variant="h5" fontWeight={700}>
          Reports
        </Typography>
        <Button variant="contained" startIcon={<PrintIcon />} onClick={handlePrint}>
          Print PDF
        </Button>
      </Box>

      <Stack ref={printRef} spacing={3}>
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Reports Summary
          </Typography>
          <Typography color="text.secondary">
            Review summary performance, monthly output, category breakdown, and quarterly completion trends.
          </Typography>
        </Box>

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

        <Grid container spacing={2}>
          <Grid item xs={12} lg={7}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Monthly Report Output
              </Typography>
              <BarChart
                height={300}
                xAxis={[{ scaleType: 'band', data: quarters }]}
                series={[
                  { data: seriesA, label: 'Published' },
                  { data: seriesB, label: 'Reviewed' },
                ]}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Category Breakdown
              </Typography>
              <PieChart
                height={300}
                series={[
                  {
                    data: [
                      { id: 0, value: 38, label: 'Editorial' },
                      { id: 1, value: 26, label: 'Design' },
                      { id: 2, value: 21, label: 'Research' },
                      { id: 3, value: 15, label: 'Support' },
                    ],
                  },
                ]}
              />
            </Paper>
          </Grid>
        </Grid>

        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Quarterly Report
          </Typography>
          <LineChart
            height={320}
            xAxis={[{ scaleType: 'point', data: quarters }]}
            series={[
              { data: seriesA, label: 'Series 1' },
              { data: seriesB, label: 'Series 2' },
            ]}
          />
        </Paper>
      </Stack>
    </Stack>
  );
}
