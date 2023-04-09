import "./App.css";
import Home from "./components/Home/home.component";
import InputBox from "./components/Input-box/input-box.component";
import Navbar from "./components/Navigation/nav.component";
import SignInForm from "./components/authentication/sign-in-component";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
