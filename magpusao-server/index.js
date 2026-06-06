require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const seedDatabase = require('./config/seedDatabase');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
let isInitialized = false;
let initializationPromise;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://magpusao-client.vercel.app',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS blocked origin: ${origin}`));
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  }),
);

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'magpusao-server' });
});

const initializeDatabase = async () => {
  if (isInitialized) {
    return;
  }

  if (!initializationPromise) {
    initializationPromise = (async () => {
      await connectDB();
      await seedDatabase();
      isInitialized = true;
    })().catch((error) => {
      initializationPromise = undefined;
      throw error;
    });
  }

  await initializationPromise;
};

app.use(async (req, res, next) => {
  try {
    await initializeDatabase();
    next();
  } catch (error) {
    next(error);
  }
});

app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Server Error' });
});

const PORT = process.env.PORT || 8000;

const startServer = () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

if (require.main === module) {
  startServer();
}

module.exports = app;
