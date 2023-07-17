import "./Todo.css";
import { useNavigate, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { IoTrashBin } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { useState, FormEvent } from "react";
import qs from "qs";
import axios from "../axios";

function Todo() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [todoTitle, setTodoTitle] = useState("");

  const handleTodoSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/todo/",
        qs.stringify({
          title: todoTitle,
        }),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <div className="app_todo">
      <div className="todo_cover">
        <h1 className="app_title ">ToDoNow</h1>
      </div>
      <div className="input_contain">
        <form onSubmit={handleTodoSubmit}>
          <input
            className="do_input"
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <button type="submit" className="todo_check">
            <FaPen size={25} />
          </button>
        </form>
      </div>
      <div className="todo_section">
        <div className="card_contain">
          <div className="todo_card">
            <h1 className="todo_true">hklkj</h1>
            <IoTrashBin className="todo_bin" size={20} />
          </div>
        </div>
        <div className="todo_nav">
          <p className="nav_cop">
            <BsPersonCircle />
            {username}
          </p>
          <p className="nav_act" onClick={logout}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
