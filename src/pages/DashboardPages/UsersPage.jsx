import { useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import usersSeed from '../../assets/users.json';

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankUser = {
  firstName: '',
  lastName: '',
  age: '',
  gender: 'male',
  contactNumber: '',
  email: '',
  role: 'viewer',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const titleCase = (value) => (value ? value.charAt(0).toUpperCase() + value.slice(1) : '');

const seedUsers = usersSeed.map((user, index) => ({
  id: index + 1,
  firstName: String(user.firstName ?? '').trim(),
  lastName: String(user.lastName ?? '').trim(),
  age: String(user.age ?? '').trim(),
  gender: String(user.gender ?? 'other').trim().toLowerCase(),
  contactNumber: String(user.contactNumber ?? '').trim(),
  email: String(user.email ?? '').trim().toLowerCase(),
  role: roles.includes(String(user.role ?? '').trim().toLowerCase()) ? String(user.role).trim().toLowerCase() : 'viewer',
  username: String(user.username ?? '').trim(),
  password: String(user.password ?? '').trim(),
  address: String(user.address ?? '').trim(),
  isActive: Boolean(user.isActive),
}));

export default function UsersPage() {
  const [users, setUsers] = useState(seedUsers);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ role: 'all', gender: 'all', status: 'all' });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState(blankUser);
  const [errors, setErrors] = useState({});

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const matchesSearch = !query || fullName.includes(query) || user.email.includes(query) || user.username.toLowerCase().includes(query);
      const matchesRole = filters.role === 'all' || user.role === filters.role;
      const matchesGender = filters.gender === 'all' || user.gender === filters.gender;
      const matchesStatus =
        filters.status === 'all' || (filters.status === 'active' && user.isActive) || (filters.status === 'inactive' && !user.isActive);

      return matchesSearch && matchesRole && matchesGender && matchesStatus;
    });
  }, [filters, search, users]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 72 },
    { field: 'firstName', headerName: 'First Name', flex: 1, minWidth: 130 },
    { field: 'lastName', headerName: 'Last Name', flex: 1, minWidth: 130 },
    { field: 'age', headerName: 'Age', width: 80 },
    {
      field: 'role',
      headerName: 'Role',
      width: 110,
      renderCell: ({ row }) => titleCase(row.role),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      sortable: false,
      renderCell: ({ row }) => <Chip size="small" color={row.isActive ? 'success' : 'default'} label={row.isActive ? 'Active' : 'Inactive'} />,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 210,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined" startIcon={<EditIcon />} onClick={() => openEditDialog(row)}>
            Edit
          </Button>
          <Button size="small" variant="contained" color={row.isActive ? 'warning' : 'success'} onClick={() => toggleUserStatus(row.id)}>
            {row.isActive ? 'Deactivate' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  const validateForm = () => {
    const nextErrors = {};

    if (!form.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!form.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    if (!/^\d+$/.test(form.age)) nextErrors.age = 'Age must be a number.';
    if (!/^\d{11}$/.test(form.contactNumber)) nextErrors.contactNumber = 'Contact number must be 11 digits.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (!form.username.trim()) nextErrors.username = 'Username is required.';
    if (/\s/.test(form.username)) nextErrors.username = 'Username must not contain spaces.';
    if (form.password.length < 8) nextErrors.password = 'Password must be at least 8 characters.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const openAddDialog = () => {
    setEditingUser(null);
    setForm(blankUser);
    setErrors({});
    setDialogOpen(true);
  };

  const openEditDialog = (user) => {
    setEditingUser(user);
    setForm({ ...user });
    setErrors({});
    setDialogOpen(true);
  };

  const handleFieldChange = (field, value) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    const cleanedUser = {
      ...form,
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      username: form.username.trim(),
      address: form.address.trim(),
      isActive: Boolean(form.isActive),
    };

    setUsers((currentUsers) => {
      if (editingUser) {
        return currentUsers.map((user) => (user.id === editingUser.id ? { ...cleanedUser, id: editingUser.id } : user));
      }

      return [{ ...cleanedUser, id: Math.max(0, ...currentUsers.map((user) => user.id)) + 1 }, ...currentUsers];
    });
    setDialogOpen(false);
  };

  const toggleUserStatus = (id) => {
    setUsers((currentUsers) => currentUsers.map((user) => (user.id === id ? { ...user, isActive: !user.isActive } : user)));
  };

  return (
    <Stack spacing={3}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
        <Typography variant="h5" fontWeight={700}>
          Users
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={openAddDialog}>
          Add User
        </Button>
      </Box>

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <TextField fullWidth label="Search by name, email, or username" value={search} onChange={(event) => setSearch(event.target.value)} />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select label="Role" value={filters.role} onChange={(event) => setFilters((current) => ({ ...current, role: event.target.value }))}>
                <MenuItem value="all">All roles</MenuItem>
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {titleCase(role)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select label="Gender" value={filters.gender} onChange={(event) => setFilters((current) => ({ ...current, gender: event.target.value }))}>
                <MenuItem value="all">All genders</MenuItem>
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {titleCase(gender)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label="Status" value={filters.status} onChange={(event) => setFilters((current) => ({ ...current, status: event.target.value }))}>
                <MenuItem value="all">All statuses</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Paper variant="outlined" sx={{ height: 560 }}>
        <DataGrid
          rows={filteredUsers}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          checkboxSelection
        />
      </Paper>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>{editingUser ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} sx={{ pt: 1 }}>
            {Object.values(errors).some(Boolean) && <Alert severity="error">Please fix the highlighted fields before saving.</Alert>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First name" value={form.firstName} onChange={(event) => handleFieldChange('firstName', event.target.value)} error={Boolean(errors.firstName)} helperText={errors.firstName} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last name" value={form.lastName} onChange={(event) => handleFieldChange('lastName', event.target.value)} error={Boolean(errors.lastName)} helperText={errors.lastName} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Age" value={form.age} onChange={(event) => handleFieldChange('age', event.target.value)} error={Boolean(errors.age)} helperText={errors.age} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select label="Gender" value={form.gender} onChange={(event) => handleFieldChange('gender', event.target.value)}>
                    {genders.map((gender) => (
                      <MenuItem key={gender} value={gender}>
                        {titleCase(gender)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Role</InputLabel>
                  <Select label="Role" value={form.role} onChange={(event) => handleFieldChange('role', event.target.value)}>
                    {roles.map((role) => (
                      <MenuItem key={role} value={role}>
                        {titleCase(role)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Contact number" value={form.contactNumber} onChange={(event) => handleFieldChange('contactNumber', event.target.value)} error={Boolean(errors.contactNumber)} helperText={errors.contactNumber} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" value={form.email} onChange={(event) => handleFieldChange('email', event.target.value)} error={Boolean(errors.email)} helperText={errors.email} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Username" value={form.username} onChange={(event) => handleFieldChange('username', event.target.value)} error={Boolean(errors.username)} helperText={errors.username} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Password" type="password" value={form.password} onChange={(event) => handleFieldChange('password', event.target.value)} error={Boolean(errors.password)} helperText={errors.password} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Address" value={form.address} onChange={(event) => handleFieldChange('address', event.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select label="Status" value={form.isActive ? 'active' : 'inactive'} onChange={(event) => handleFieldChange('isActive', event.target.value === 'active')}>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save User
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
