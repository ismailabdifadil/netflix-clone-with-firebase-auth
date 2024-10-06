import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/browse");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <img
        className="absolute w-full h-screen object-cover"
        src="/public/images/misc/home.jpeg"
        alt=""
      />
      <img
        className="z-10 absolute top-5 left-2  w-[120px] md:w-[180px]"
        src="/public/images/logo/logo.svg"
        alt=""
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#141414] px-8 py-14 z-10 rounded-md max-w-md"
      >
        <h1 className="text-white text-3xl text-center font-semibold">
          Sign In
        </h1>
        <label htmlFor="" className="w-full inline-block">
          <input
            className="form-control"
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-orange-500">
              This field is required
            </p>
          )}
        </label>
        <label htmlFor="">
          <input
            {...register("password", { required: true })}
            className="form-control"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="mt-2 text-sm text-orange-500">
              This field is required
            </p>
          )}
        </label>
        <button className="btn">Sign In</button>
        <div className="flex mt-4 gap-4">
          <p>New to Netflix</p>
          <Link to="/signup">
            <span className="font-semibold underline">Sign Up</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
