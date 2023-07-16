import "./Todo.css";
import { BsPersonCircle } from "react-icons/bs";
import { IoTrashBin } from "react-icons/io5";
import { FaPen } from "react-icons/fa";

function Todo() {
  return (
    <div className="app_todo">
      <div className="todo_cover">
        <h1 className="app_title ">ToDoNow</h1>
      </div>
      <div className="input_contain">
        <form>
          <input className="do_input" type="text" />
          <button type="submit" className="todo_check">
            <FaPen size={25} />
          </button>
        </form>
      </div>
      <div className="todo_section">
        <div className="card_contain">
          <div className="todo_card">
            <h1 className="todo_true"></h1>
            <IoTrashBin className="todo_bin" size={20} />
          </div>
        </div>
        <div className="todo_nav">
          <p className="nav_cop">
            <BsPersonCircle />
            {/* {username} */}
          </p>
          <p className="nav_act">logout</p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
