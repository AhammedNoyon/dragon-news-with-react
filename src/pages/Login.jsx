import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  //context
  const { signInUser } = useContext(AuthContext);

  //hooks
  const navigate = useNavigate();

  //state
  const [err, setErr] = useState(null);
  const [successfully, setSuccessfully] = useState(null);
  const [toggleEye, setToggleEye] = useState(false);

  //Login
  const handleSignInSubmit = (event) => {
    event.preventDefault();
    //data collect in input

    const email = event.target.email.value;
    const password = event.target.password.value;

    //clean error,success state
    setErr(null);
    setSuccessfully(null);

    //sign In with firebase
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (!user.emailVerified) {
          return alert("Please verify your email");
        } else {
          event.target.reset();
          setSuccessfully("Login successfully");
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErr(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center mt-[180px]">
      <div className="card w-full max-w-xl shrink-0 shadow-2xl">
        <form onSubmit={handleSignInSubmit} className="card-body">
          <h3 className="text-2xl font-bold text-center my-10">
            Login your account
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={`${toggleEye ? "text" : "password"}`}
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <div
              onClick={() => setToggleEye(!toggleEye)}
              className="absolute right-10 top-[52px] text-xl"
            >
              {toggleEye ? <FaEyeSlash /> : <FaEye />}
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <p className="*:text-lg  text-center mb-2">
            <span>Dont’t Have An Account ? </span>
            <Link
              className="text-red-500 font-medium underline underline-offset-4"
              to="/auth/register"
            >
              Register
            </Link>
          </p>
          <div>
            {err && <p className="text-red-700 text-xl font-medium">{err}</p>}
            {successfully && (
              <p className="text-success text-xl font-medium">{successfully}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
