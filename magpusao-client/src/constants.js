const normalizeApiUrl = (url) => {
  const trimmedUrl = url.replace(/\/+$/, '');

  try {
    const parsedUrl = new URL(trimmedUrl);

    if (parsedUrl.hostname.startsWith('magpusao-server-') && parsedUrl.hostname.endsWith('.vercel.app')) {
      parsedUrl.hostname = 'magpusao-server.vercel.app';
    }

    const normalizedUrl = parsedUrl.toString().replace(/\/+$/, '');
    return normalizedUrl.endsWith('/api') ? normalizedUrl : `${normalizedUrl}/api`;
  } catch {
    const normalizedUrl = trimmedUrl;
    return normalizedUrl.endsWith('/api') ? normalizedUrl : `${normalizedUrl}/api`;
  }
};

const HOST = normalizeApiUrl(import.meta.env.VITE_API_URL || 'http://localhost:8000/api');

export default {
  HOST,
};
