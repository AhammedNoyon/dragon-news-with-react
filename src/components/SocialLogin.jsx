import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="space-y-2">
      <button className="btn w-full flex items-center gap-2 text-lg font-medium text-blue-500 border border-cyan-600">
        <span>
          <FaGoogle></FaGoogle>
        </span>
        <span>Login With Google</span>
      </button>
      <button className="btn w-full flex items-center gap-2 text-lg font-medium  border border-gray-700">
        <span>
          <FaGithub></FaGithub>
        </span>
        <span>Login With Github</span>
      </button>
    </div>
  );
};

export default SocialLogin;
