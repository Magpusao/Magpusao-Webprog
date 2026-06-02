const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Article = require('../models/Article');

const users = [
  {
    firstName: 'Bianca',
    lastName: 'Cruz',
    age: '27',
    gender: 'female',
    contactNumber: '09208345678',
    email: 'bianca.cruz@devs.dev',
    role: 'admin',
    username: 'biancacruz',
    password: 'Bianca123',
    address: 'Quezon City, Metro Manila',
    isActive: true,
  },
  {
    firstName: 'Aldrin',
    lastName: 'Reyes',
    age: '29',
    gender: 'male',
    contactNumber: '09211234567',
    email: 'aldrin.reyes@devs.dev',
    role: 'editor',
    username: 'aldreyes',
    password: 'Aldrin123',
    address: 'Sampaloc, Manila, Metro Manila',
    isActive: true,
  },
  {
    firstName: 'Marco',
    lastName: 'Santos',
    age: '31',
    gender: 'male',
    contactNumber: '09183245678',
    email: 'marco.santos@devs.dev',
    role: 'viewer',
    username: 'marcosantos',
    password: 'Marco123',
    address: 'Tondo, Manila, Metro Manila',
    isActive: true,
  },
];

const articles = [
  {
    slug: 'react-routing-basics',
    title: 'React Routing Basics',
    author: 'Magpusao Web Programming',
    summary: 'Set up nested public, auth, and dashboard routes using React Router.',
    body:
      'React Router keeps large applications organized by mapping each URL segment to a focused page component. Nested layouts make shared navigation, dashboards, and auth screens easier to maintain.',
    status: 'active',
  },
  {
    slug: 'mui-dashboard-layouts',
    title: 'MUI Dashboard Layouts',
    author: 'Magpusao Web Programming',
    summary: 'Use Material UI drawers, app bars, cards, charts, and data grids.',
    body:
      'Material UI provides production-ready primitives for dashboard interfaces. A permanent drawer, app bar, summary cards, charts, and data tables can be composed into a clean admin experience.',
    status: 'active',
  },
  {
    slug: 'component-based-apps',
    title: 'Component-Based Apps',
    author: 'Magpusao Web Programming',
    summary: 'Break interfaces into layouts, reusable components, and pages.',
    body:
      'Component-based development keeps responsibilities clear. Layout components own repeated page chrome, page components own route content, and shared components provide reusable UI building blocks.',
    status: 'active',
  },
];

const seedUsers = async () => {
  await User.createCollection();
  await User.syncIndexes();

  const userCount = await User.countDocuments();

  if (userCount > 0) {
    return;
  }

  const hashedUsers = await Promise.all(
    users.map(async (user) => ({
      ...user,
      password: await bcrypt.hash(user.password, 10),
    })),
  );

  await User.insertMany(hashedUsers);
  console.log('Seeded users collection');
};

const seedArticles = async () => {
  await Article.createCollection();
  await Article.syncIndexes();

  const articleCount = await Article.countDocuments();

  if (articleCount > 0) {
    return;
  }

  await Article.insertMany(articles);
  console.log('Seeded articles collection');
};

const seedDatabase = async () => {
  await seedUsers();
  await seedArticles();
};

module.exports = seedDatabase;
