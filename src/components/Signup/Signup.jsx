import googleLogo from "../../assets/google-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";

const Signup = () => {
  return (
    <div className="m-auto ">
      <div className="flex flex-col flex-wrap space-y-10 justify-center items-center mb-10">
        <h1 className="text-black text-center text-3xl md:text-4xl font-bold">
          Sign Up for free to enhance your business.
        </h1>
        <button className="w-full max-w-sm h-11 rounded-full border-[1px] border-black flex justify-center items-center relative gap-2">
          <img
            className="absolute md:static left-[1rem]"
            src={googleLogo}
            height="20"
            width="20"
            alt="google logos"
          />
          sign up with Google
        </button>
        <button className="w-96 h-11 rounded-full border-[1px] border-black flex justify-center items-center gap-2">
          <img
            className="absolute md:static left-[1rem]"
            src={facebookLogo}
            height="20"
            width="20"
            alt="facebook logo"
          />
          sign up with Facebook
        </button>
      </div>
      <div className="flex justify-between mb-7">
        <h3>Register as a Consumer</h3>
        <h3>Register as a Logistic service provider</h3>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-[1px] w-[13rem] bg-black"></div>
        <span className="mx-2">or</span>
        <div className="h-[1px] w-[13rem] bg-black"></div>
      </div>
    </div>
  );
};

export default Signup;
