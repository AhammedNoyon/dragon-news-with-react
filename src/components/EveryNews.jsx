import { AiFillStar, AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
import News from "./News";

const EveryNews = (props = {}) => {
  const { singleNews } = props || {};

  // console.log(singleNews);
  return (
    <div className="card w-full bg-white shadow-lg rounded-lg border border-gray-200  p-4">
      {/* Author Section */}
      <div className=" pb-2 rounded-xl">
        <div className="flex justify-between items-center mb-4 bg-gray-200">
          <div className="flex items-center px-2">
            <img
              src={singleNews.author.img}
              alt="Author"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h2 className="font-semibold">{singleNews.author.name}</h2>
              <p className="text-xs text-gray-500">
                {new Date(
                  singleNews.author.published_date
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
          <AiOutlineShareAlt className="text-gray-500 cursor-pointer" />
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg mb-2 px-2">{singleNews.title}</h3>

        {/* Thumbnail */}
        <img
          src={singleNews.thumbnail_url}
          alt="Thumbnail"
          className="w-full h-[600px] object-cover rounded-lg mb-4"
        />

        {/* Details */}
        <p className="text-gray-600 text-sm mb-4">
          {singleNews.details.slice(0, 150)}...{" "}
          <Link to={`/news/${singleNews._id}`} className="text-blue-500">
            Read More
          </Link>
        </p>
        <div className="border mt-2 mb-4"></div>

        {/* Footer Section */}
        <div className="flex justify-between items-center text-gray-600 text-sm">
          {/* Rating */}
          <div className="flex items-center text-yellow-500 mb-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <AiFillStar key={i} />
              ))}
            <span className="ml-2 text-gray-700">
              {singleNews.rating.number}
            </span>
          </div>

          <div className="flex items-center">
            <AiOutlineEye className="mr-1" />
            <span>{singleNews.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryNews;
