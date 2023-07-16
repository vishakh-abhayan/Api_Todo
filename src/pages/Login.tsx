import { Link } from "react-router-dom";
import { BsPersonFillCheck } from "react-icons/bs";

function Login() {
  return (
    <div className="main_div">
      <div className="log_board">
        <h1>
          <BsPersonFillCheck size={50} />
          Login
        </h1>
        <form className="input_field">
          <input
            placeholder="Username"
            type="text"
            name="username"
            autoComplete="off"
          />
          <input placeholder="Password" type="password" name="password" />
          {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
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
