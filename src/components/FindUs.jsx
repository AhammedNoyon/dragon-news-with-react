import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <>
      <h3 className="text-xl mb-4 font-semibold text-[#403F3F]">Find Us</h3>
      <div className=" border rounded-xl">
        <div className="border-b">
          <button className="btn w-full justify-start">
            <span className="text-blue-600 bg-gray-200 p-2 rounded-full *:text-xl">
              <FaFacebook></FaFacebook>
            </span>
            <span className="text-gray-500">Facebook</span>
          </button>
        </div>
        <div>
          <button className="btn w-full justify-start">
            <span className="text-blue-600 bg-gray-200 p-2 rounded-full *:text-xl">
              <FaTwitter></FaTwitter>
            </span>
            <span className="text-gray-500">Twitter</span>
          </button>
        </div>
        <div className="border-t">
          <button className="btn w-full justify-start">
            <span className="text-blue-600 bg-gray-200 p-2 rounded-full *:text-xl">
              <FaInstagram></FaInstagram>
            </span>
            <span className="text-gray-500">Instagram</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FindUs;
