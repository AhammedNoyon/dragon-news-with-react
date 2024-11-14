import { Outlet } from "react-router-dom";
import CategoryTabs from "../components/CategoryTabs";

const Home = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-3">
        <CategoryTabs></CategoryTabs>
      </div>
      <div className="col-span-6">
        {/* dynamic news */}
        <h3 className="text-xl mb-4 font-semibold text-[#403F3F]">
          Dragon News Home
        </h3>
        <Outlet></Outlet>
      </div>
      <div className="col-span-3">
        {/* login register */}
        <h3 className="text-xl mb-4 font-semibold text-[#403F3F]">
          Login With
        </h3>
      </div>
    </section>
  );
};

export default Home;
