import { useLoaderData, useNavigation } from "react-router-dom";
import EveryNews from "./EveryNews";

const News = () => {
  const { data } = useLoaderData();
  const navigation = useNavigation();
  const news = data;
  // console.log(news);
  return (
    <>
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-bars loading-md "></span>
        </div>
      ) : (
        <div className="space-y-5">
          {news.map((singleNews, index) => (
            <EveryNews key={index} singleNews={singleNews}></EveryNews>
          ))}
        </div>
      )}
    </>
  );
};

export default News;
