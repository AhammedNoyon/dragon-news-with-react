import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const MarqueeText = () => {
  return (
    <div className="flex gap-4 items-center bg-[#F3F3F3] p-4">
      <div className="bg-red-600 text-white text-lg font-semibold w-fit py-2 px-4">
        <p>Latest</p>
      </div>
      <Marquee className="underline">
        <Link to="#">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, omnis.
        </Link>
        <Link to="#">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, omnis.
        </Link>
        <Link to="#">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, omnis.
        </Link>
        <Link to="#">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, omnis.
        </Link>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
