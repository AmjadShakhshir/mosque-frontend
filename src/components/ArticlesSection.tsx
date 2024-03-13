const ArticlesSection = () => {
  return (
    <div className="col-md-6">
      <div className="article-row row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success-emphasis">Ramadan</strong>
          <h3 className="mb-0">Ramadhan 2024 Announcement</h3>
          <div className="mb-1 text-body-secondary">Mar 11</div>
          <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
