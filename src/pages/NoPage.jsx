// bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// jquery
import "jquery/dist/jquery.min.js";

export default function NoPage() {
  return (
    <>
      <div
        className="page-wrap d-flex flex-row align-items-center"
        style={{
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <span className="display-1 d-block">404</span>
              <div className="mb-4 lead">
                The page you are looking for was not found.
              </div>
              <a href="/" className="btn btn-link">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
