const Blogs = () => {
  return (
    <main className="container m-5">
      <div className="blogs p-4 p-md-5 mb-4 text-body-emphasis">
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
          <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
          <p className="lead mb-0">
            <a href="#" className="text-body-emphasis fw-bold">
              Continue reading...
            </a>
          </p>
        </div>
      </div>

      <div className="d-flex mb-16 align-items-center">
        <div className="w-100 border-bottom"></div>
        <div className="flex-shrink-0 d-inline-block bg-light-light px-8 py-5 border border-light rounded">
          <span className="display-3 fs-1 p-2 fw-bold border rounded">Latest articles</span>
        </div>
        <div className="w-100 border-bottom"></div>
      </div>

      <div className="row m-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-body-secondary">Nov 12</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
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
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
              <h3 className="mb-0">Post title</h3>
              <div className="mb-1 text-body-secondary">Nov 11</div>
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
      </div>
    </main>
  );
};

export default Blogs;
