import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonFillCheck } from "react-icons/bs";
import axios from "../axios";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login/", {
        username: formData.username,
        password: formData.password,
      });
      const accessToken = response.data.access;
      localStorage.setItem("accessToken", accessToken);
      navigate(`/todo/${formData.username}`);
    } catch (error) {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="main_div">
      <div className="log_board">
        <h1>
          <BsPersonFillCheck size={50} />
          Login
        </h1>
        <form className="input_field" onSubmit={handleLogin}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            autoComplete="off"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="log_buttons">
            <button type="submit" className="button_log">
              Login
            </button>
            <Link to="/auth" className="button_sing">
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
