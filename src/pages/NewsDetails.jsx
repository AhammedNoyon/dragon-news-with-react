import { useLoaderData } from "react-router-dom";
import EveryNewsDetails from "../components/EveryNewsDetails";
import Header from "../components/Header";
import RightBar from "../components/RightBar";

const NewsDetails = () => {
  const data = useLoaderData();
  // console.log(data.data[0]);
  const news = data.data[0];
  console.log(news);
  return (
    <div className="w-11/12 md:w-3/4 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <section className="col-span-9">
          <EveryNewsDetails news={news}></EveryNewsDetails>
        </section>
        <section className="col-span-3">
          <RightBar></RightBar>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
