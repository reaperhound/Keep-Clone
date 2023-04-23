import SignInForm from "../authentication/sign-in-component";

const Navbar = () => {
  const pic = "https://lh3.googleusercontent.com/a/AGNmyxYBbxF43fNNZfx6CxIGgtCd4m2uGuSN-RMJ5DGBgA=s96-c"

  return (
    <nav className="w-[100%] flex justify-between p-3">
      <img src={pic} alt="logo" className="w-[50px] h-[50px] rounded-full hidden sm:block" />
      <h1 className="sm:font-bold sm:text-3xl font-semibold text-2xl pl-[100px]">Reapers Keep</h1>
      <SignInForm />
    </nav>
  );
};

export default Navbar;
