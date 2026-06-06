//labact7

//deploy
//labact7
import { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import { createArticle, deleteArticle, fetchArticles, updateArticle } from '../../services/ArticleService';

const blankArticle = {
  title: '',
  slug: '',
  author: 'Magpusao Web Programming',
  summary: '',
  body: '',
  status: 'active',
};

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export default function DashArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [form, setForm] = useState(blankArticle);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState('');

  useEffect(() => {
    let mounted = true;

    fetchArticles()
      .then((data) => {
        if (mounted) {
          setArticles(data);
        }
      })
      .catch((error) => {
        if (mounted) {
          setPageError(error.message || 'Unable to load articles.');
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });


      
    return () => {
      mounted = false;
    };
  }, []);

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.slug.toLowerCase().includes(query);
      const matchesStatus = status === 'all' || article.status === status;
      return matchesSearch && matchesStatus;
    });
  }, [articles, search, status]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 72 },
    { field: 'slug', headerName: 'Slug', flex: 1, minWidth: 150 },
    { field: 'title', headerName: 'Title', flex: 1.3, minWidth: 180 },
    {
      field: 'paragraphs',
      headerName: 'Paragraphs',
      width: 120,
      valueGetter: (value, row) => row.body.split(/\n+/).filter(Boolean).length || 1,
    },
    {
      field: 'preview',
      headerName: 'Preview',
      flex: 1.5,
      minWidth: 220,
      valueGetter: (value, row) => row.summary || row.body.slice(0, 90),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
      renderCell: ({ row }) => <Chip size="small" color={row.status === 'active' ? 'success' : 'default'} label={row.status} />,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 190,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined" startIcon={<EditIcon />} onClick={() => openEditDialog(row)}>
            Edit
          </Button>
          <Button size="small" variant="contained" color="warning" startIcon={<DeleteIcon />} onClick={() => handleDelete(row.id)}>
            Delete
          </Button>
        </Stack>
      ),
    },
  ];

  const openAddDialog = () => {
    setEditingArticle(null);
    setForm(blankArticle);
    setDialogOpen(true);
  };

  const openEditDialog = (article) => {
    setEditingArticle(article);
    setForm({ ...article });
    setDialogOpen(true);
  };

  const handleFieldChange = (field, value) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
      ...(field === 'title' && !editingArticle ? { slug: slugify(value) } : {}),
    }));
  };

  const handleSave = async () => {
    const cleanedArticle = {
      ...form,
      title: form.title.trim(),
      slug: form.slug.trim() || slugify(form.title),
      author: form.author.trim(),
      summary: form.summary.trim(),
      body: form.body.trim(),
    };

    if (!cleanedArticle.title || !cleanedArticle.summary || !cleanedArticle.body) {
      setPageError('Title, summary, and body are required.');
      return;
    }

    try {
      if (editingArticle) {
        const updatedArticle = await updateArticle(editingArticle._id || editingArticle.id, cleanedArticle);
        setArticles((currentArticles) =>
          currentArticles.map((article) => (article.id === editingArticle.id ? { ...updatedArticle, id: editingArticle.id } : article)),
        );
      } else {
        const createdArticle = await createArticle(cleanedArticle);
        setArticles((currentArticles) => [createdArticle, ...currentArticles]);
      }
      setPageError('');
      setDialogOpen(false);
    } catch (error) {
      setPageError(error.message || 'Unable to save article.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      setArticles((currentArticles) => currentArticles.filter((article) => String(article.id) !== String(id)));
    } catch (error) {
      setPageError(error.message || 'Unable to delete article.');
    }
  };

  return (
    <Stack spacing={3}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
        <Typography variant="h5" fontWeight={700}>
          Articles
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={openAddDialog}>
          Add Article
        </Button>
      </Box>

      {pageError && <Alert severity="error">{pageError}</Alert>}

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <TextField fullWidth label="Search articles" value={search} onChange={(event) => setSearch(event.target.value)} />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label="Status" value={status} onChange={(event) => setStatus(event.target.value)}>
                <MenuItem value="all">All statuses</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="draft">Draft</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Paper variant="outlined" sx={{ height: 560 }}>
        {loading ? (
          <Box sx={{ height: '100%', display: 'grid', placeItems: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <DataGrid
            rows={filteredArticles}
            columns={columns}
            pageSizeOptions={[5, 10]}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            checkboxSelection
          />
        )}
      </Paper>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>{editingArticle ? 'Edit Article' : 'Add Article'}</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <TextField fullWidth label="Title" value={form.title} onChange={(event) => handleFieldChange('title', event.target.value)} required />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select label="Status" value={form.status} onChange={(event) => handleFieldChange('status', event.target.value)}>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="draft">Draft</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Slug" value={form.slug} onChange={(event) => handleFieldChange('slug', event.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Author" value={form.author} onChange={(event) => handleFieldChange('author', event.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Summary" value={form.summary} onChange={(event) => handleFieldChange('summary', event.target.value)} required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={7}
                  label="Body"
                  value={form.body}
                  onChange={(event) => handleFieldChange('body', event.target.value)}
                  required
                />
              </Grid>
            </Grid>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save Article
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
