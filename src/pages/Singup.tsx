import { BsArrowLeft, BsPersonFillAdd } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Auth.css";

function Singup() {
  return (
    <div className="main_div">
      <div className="log_board">
        <h1>
          <BsPersonFillAdd size={50} />
          Signup
        </h1>
        <form className="input_field">
          <input
            placeholder="Username"
            type="text"
            name="username"
            autoComplete="newUser"
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            autoComplete="off"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            autoComplete="new-password"
          />
          {/* {formError && (
        <p className="error-message">Please fill in all fields.</p>
      )} */}
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
