import { Link } from "react-router-dom";
import '../../CSS/PageNotFound.css'

const PageNotFound = () => {
  return (
    <>
      <div class="site-wrapper">
        <div class="site-wrapper-inner">
          <div class="cover-container">
            <h1 class="cover-heading">ERROR 404 - PAGE NOT FOUND</h1>
          </div>
          <Link to={"/"} class="nav-link active" aria-current="page">
            <button type="button" class="btn btn-outline-dark">
              Go to Homepage
            </button>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
