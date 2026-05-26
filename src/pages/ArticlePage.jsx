import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import articles from '../assets/article-content.js';
import Button from '../components/Button';
import ArticleList from '../components/ArticleList';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  if (!article) {
    return <Navigate to="/not-found" />;
  }

  const otherArticles = articles.filter(a => a.name !== name);

  return (
    <div className="flex w-full flex-col gap-10 pb-12">
      {/* Article Header & Image */}
      <section className="bg-white border-b-2 border-emerald-600">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Link 
            to="/articles" 
            className="inline-flex items-center text-emerald-600 font-semibold mb-6 hover:translate-x-[-4px] transition-transform"
          >
            ← Back to Articles
          </Link>
          
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
              {article.title}
            </h1>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-600">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-emerald prose-lg max-w-none">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-zinc-700 leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-emerald-100 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl">
              D
            </div>
            <div>
              <p className="font-bold text-zinc-900">DEV.LOG Editorial</p>
              <p className="text-zinc-500 text-sm">Published on May 12, 2026</p>
            </div>
          </div>
          <Button to="/articles" variant="secondary">All Articles</Button>
        </div>
      </section>

      {/* Suggested Reading */}
      {otherArticles.length > 0 && (
        <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 border-l-4 border-emerald-600 pl-4">
            Suggested Reading
          </h2>
          <ArticleList articles={otherArticles.slice(0, 4)} />
        </section>
      )}
    </div>
  );
};

export default ArticlePage;