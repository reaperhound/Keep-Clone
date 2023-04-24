import SignInForm from "../authentication/sign-in-component";
import Logo from "../../assets/keep-logo.png"

const Navbar = () => {

  return (
    <nav className="w-[100%] flex justify-between p-3">
      <img src={Logo} alt="logo" className="w-[50px] h-[50px] rounded-full hidden sm:block" />
      <h1 className="sm:font-bold sm:text-3xl font-semibold text-2xl pl-[100px]">PenCloud</h1>
      <SignInForm />
    </nav>
  );
};

export default Navbar;
