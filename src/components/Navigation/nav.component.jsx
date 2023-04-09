import SignInForm from "../authentication/sign-in-component";

const Navbar = () => {
  const pic = "https://lh3.googleusercontent.com/a/AGNmyxYBbxF43fNNZfx6CxIGgtCd4m2uGuSN-RMJ5DGBgA=s96-c"

  return (
    <nav className="w-[100%] flex justify-between p-3">
      <img src={pic} alt="logo" className="w-[50px] h-[50px] rounded-full" />
      <h1 className="font-bold text-3xl">Reapers Keep</h1>
      <SignInForm />
    </nav>
  );
};

export default Navbar;
