import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";

const RightBar = () => {
  return (
    <div className="space-y-5">
      <div>
        <SocialLogin></SocialLogin>
      </div>
      <div>
        <FindUs></FindUs>
      </div>
    </div>
  );
};

export default RightBar;
