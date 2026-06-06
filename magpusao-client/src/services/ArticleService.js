import axios from 'axios';
import constants from '../constants';
import { articles as seedArticles } from '../assets/article-content';

const API = axios.create({
  baseURL: `${constants.HOST}/articles`,
});

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const normalizeArticle = (article, index = 0) => ({
  id: article.id ?? article._id ?? index + 1,
  _id: article._id,
  slug: article.slug || slugify(article.title || `article-${index + 1}`),
  title: String(article.title ?? '').trim(),
  author: String(article.author ?? 'Magpusao Web Programming').trim(),
  summary: String(article.summary ?? article.preview ?? '').trim(),
  body: String(article.body ?? article.content ?? '').trim(),
  status: String(article.status ?? 'active').toLowerCase(),
});

const initialArticles = seedArticles.map(normalizeArticle);
export const getLocalArticles = () => initialArticles;

export const fetchArticles = async () => {
  try {
    const { data } = await API.get('/');
    return data.map(normalizeArticle);
  } catch {
    return initialArticles;
  }
};

export const createArticle = async (article) => {
  const payload = { ...article, slug: article.slug || slugify(article.title) };
  const { data } = await API.post('/', payload);
  return normalizeArticle(data);
};

export const updateArticle = async (id, article) => {
  const payload = { ...article, slug: article.slug || slugify(article.title) };
  const { data } = await API.put(`/${id}`, payload);
  return normalizeArticle(data);
};

export const deleteArticle = async (id) => {
  await API.delete(`/${id}`);
};
