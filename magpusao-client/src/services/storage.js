export const readStoredValue = (key, fallback) => {
  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallback;
  } catch {
    return fallback;
  }
};

export const writeStoredValue = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
