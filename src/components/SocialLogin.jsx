import { useContext } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  //context
  const { signInWithGoogle, signInWithGithub, signInWithTwitter } =
    useContext(AuthContext);

  //hooks
  const navigate = useNavigate();
  //social sign in

  //google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  //github
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  //twitter
  const handleTwitterSignIn = () => {
    signInWithTwitter()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };
  return (
    <div className="space-y-2">
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full flex items-center gap-2 text-lg font-medium text-blue-500 border border-cyan-600"
      >
        <span>
          <FaGoogle></FaGoogle>
        </span>
        <span>Login With Google</span>
      </button>
      <button
        onClick={handleGithubSignIn}
        className="btn w-full flex items-center gap-2 text-lg font-medium  border border-gray-700"
      >
        <span>
          <FaGithub></FaGithub>
        </span>
        <span>Login With Github</span>
      </button>
      <button
        onClick={handleTwitterSignIn}
        className="btn text-blue-500 w-full flex items-center gap-2 text-lg font-medium  border border-gray-700"
      >
        <span className="">
          <FaTwitter></FaTwitter>
        </span>
        <span>Login With Twitter</span>
      </button>
    </div>
  );
};

export default SocialLogin;
