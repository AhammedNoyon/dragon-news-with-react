import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MarqueeText from "../components/MarqueeText";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto">
      <header>
        <Header></Header>
        <div>
          <MarqueeText></MarqueeText>
        </div>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      {/* footer */}
    </div>
  );
};

export default Layout;
