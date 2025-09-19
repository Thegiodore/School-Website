import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/News.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/news/") // pls Theo di ko alam if tama endpoint
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-4 mb-5">
        <h1 className="news-title">University News</h1>
        <p className="news-subtitle text-center">
          Latest updates and announcements from Theory University.
        </p>

        {loading ? (
          <p className="text-center">Loading news...</p>
        ) : articles.length === 0 ? (
          <p className="text-center">No news articles available.</p>
        ) : (
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-4 mb-4" key={article.id}>
                <div className="card news-card shadow-sm h-100">
                  {article.image && (
                    <img
                      src={`http://localhost:8000${article.image}`}
                      alt={article.title}
                      className="card-img-top news-img"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                      {article.content.length > 120
                        ? article.content.substring(0, 120) + "..."
                        : article.content}
                    </p>
                  </div>
                  <div className="card-footer text-muted small">
                    {new Date(article.publication_date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default News;
