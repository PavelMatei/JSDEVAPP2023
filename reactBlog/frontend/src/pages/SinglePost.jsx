import React from "react";

export default function SinglePost() {
  return (
    // Page content
    <div className="container">
      <div className="row">
        <div className="card mb-4">
          <a href="#!">
            <img
              className="card-img-top"
              src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
              alt="..."
            />
          </a>
          <div className="card-body">
            <div className="small text-muted">January 1, 2023</div>
            <h2 className="card-title">Featured Post Title</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
              laboriosam. Dicta expedita corporis animi vero voluptate
              voluptatibus possimus, veniam magni quis!
            </p>
            <a className="btn btn-primary" href="#!">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
