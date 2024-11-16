// import { useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";

const EveryNewsDetails = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="card border  shadow-xl">
      <figure className="px-10 pt-10">
        <img src={news?.image_url} alt="" className="rounded-xl w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{news?.title}</h2>
        <p>{news?.details}</p>
        <div className="card-actions">
          <Link
            to={`/category/${news?.category_id}`}
            className="btn bg-orange-500"
          >
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EveryNewsDetails;
