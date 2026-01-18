import React, { useState } from "react";

const Input = ({ list, setList }) => {
  const [todos, setTodos] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setList([...list, todos]);
    setTodos("");
  };
  return (
    <>
      <form>
        <input
          className=" border-gray-600 mx-3 border"
          type="text"
          placeholder="Add item"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
        />
        <button
          onClick={handleChange}
          className="bg-violet-400 text-white px-2 py-0.5 rounded-lg cursor-pointer hover:shadow-md"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Input;
