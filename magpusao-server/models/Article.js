const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, default: 'Magpusao Web Programming' },
    summary: { type: String, required: true },
    body: { type: String, required: true },
    status: { type: String, enum: ['active', 'draft'], default: 'active' },
  },
  { timestamps: true },
);

module.exports = mongoose.models.Article || mongoose.model('Article', articleSchema);
