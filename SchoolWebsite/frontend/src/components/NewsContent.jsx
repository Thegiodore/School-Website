import React from "react";
import "../css/NewsContent.css";

const NewsContent = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="news-modal-overlay" onClick={onClose}>
      <div className="news-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        {article.image && (
          <img src={article.image} alt={article.title} />
        )}
        <h2 className="drawer-title">{article.title}</h2>
        <p className="drawer-date">
          {new Date(article.publication_date).toLocaleDateString()}
        </p>
        <p className="drawer-text">{article.content}</p>
      </div>
    </div>
  );
};

export default NewsContent;
