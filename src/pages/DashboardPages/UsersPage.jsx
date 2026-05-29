import { Paper, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columns, users } from './dashboardData';

export default function UsersPage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h5" fontWeight={700}>
        Users
      </Typography>
      <Paper variant="outlined" sx={{ height: 560 }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          checkboxSelection
        />
      </Paper>
    </Stack>
  );
}
