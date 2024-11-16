import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {
  //context
  const { createUser, emailVerification } = useContext(AuthContext);

  //hooks
  const navigate = useNavigate();

  //state
  const [err, setErr] = useState(null);
  const [successfully, setSuccessfully] = useState(null);

  //submit
  const handleCreateUserSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    //err,successfully state clear
    setErr(null);
    setSuccessfully(null);

    //validation
    if (password.length < 6) {
      return setErr("Password more than 6 characters");
    }

    const digit = /(?=.*[0-9])/;
    const upperCase = /(?=.*[A-Z])/;
    const lowerCase = /(?=.*[a-z])/;
    const special = /(?=.*[\W_])/;

    if (!digit.test(password)) {
      return setErr("Please Enter at least digit");
    }
    if (!upperCase.test(password)) {
      setErr("Please Enter at least upperCase");
      return;
    }
    if (!lowerCase.test(password)) {
      setErr("Please Enter at least lowerCase");
      return;
    }
    if (!special.test(password)) {
      setErr("Please Enter at least special character");
      return;
    }

    //create user
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        event.target.reset();
        console.log(user);
        setSuccessfully("Register successfully");
        emailVerification().then(() => {
          alert("Sent your email verification");
        });
        navigate("/auth/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setErr(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center mt-[80px]">
      <div className="card w-full max-w-xl shrink-0 shadow-2xl">
        <form onSubmit={handleCreateUserSubmit} className="card-body">
          <h3 className="text-2xl font-bold text-center my-10">
            Register your account
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
          <p className="*:text-lg  text-center mb-2">
            <span>Already have an account ? </span>
            <Link
              className="text-red-500 font-medium underline underline-offset-4"
              to="/auth/login"
            >
              Login
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

export default Register;
