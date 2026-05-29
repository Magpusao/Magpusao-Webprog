export const users = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', age: 14 },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 31 },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 31 },
  { id: 4, firstName: 'Arya', lastName: 'Stark', age: 11 },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: 30 },
  { id: 6, firstName: 'Melisandre', lastName: null, age: 150 },
  { id: 7, firstName: 'Ferrara', lastName: 'Clifford', age: 44 },
  { id: 8, firstName: 'Rossini', lastName: 'Frances', age: 36 },
  { id: 9, firstName: 'Harvey', lastName: 'Roxie', age: 65 },
];

export const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'First name', flex: 1, minWidth: 130 },
  { field: 'lastName', headerName: 'Last name', flex: 1, minWidth: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    flex: 1,
    minWidth: 180,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`.trim(),
  },
];

export const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
export const seriesA = [38, 43, 33, 38];
export const seriesB = [54, 23, 51, 36];
