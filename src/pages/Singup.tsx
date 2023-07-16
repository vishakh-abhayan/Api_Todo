import { useState, ChangeEvent, FormEvent } from "react";
import { BsArrowLeft, BsPersonFillAdd } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";
import "./Auth.css";

function Singup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }
    try {
      await axios.post("/register/", {
        username: formData.username,
        password: formData.password,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main_div">
      <div className="log_board">
        <h1>
          <BsPersonFillAdd size={50} />
          Signup
        </h1>
        <form className="input_field" onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            autoComplete="newUser"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {formError && <p className="error-message">{formError}</p>}
          <div className="log_buttons">
            <Link to="/" className="button_log">
              <BsArrowLeft /> back to login
            </Link>
            <button type="submit" className="button_sing">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singup;
