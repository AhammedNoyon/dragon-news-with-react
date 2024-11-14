import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="space-y-3 text-center pt-12 pb-8">
      <div className="mb-2 flex justify-center">
        <img src={logo} alt="" />
      </div>
      <p className="text-lg font-normal text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium text-gray-400">
        {moment().format("dddd, MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default Header;
