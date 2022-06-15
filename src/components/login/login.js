import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login__logo"
          src={require("../../assets/images/amazon.png")}
          alt=""
        />
      </NavLink>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={handleEmail} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={handlePassword} />
          <button className="login__signIn" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__register" type="submit" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};
export default Login;
