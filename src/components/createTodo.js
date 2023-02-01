import { useState } from "react";

import axios from "axios";

export function CreateTodo() {
  const [data, setData] = useState({
    title: "",
    description: "",
    assignTo: "",
    status: false,
  });

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
}

function handleSubmit(e) {
   

    axios
        .post("http://localhost:8000/api/todo", data)
        .then((res) => {
            setData({ title: "", description: "" });
            console.log(res.data.message);
        })
        .catch((err) => {
            console.log("Error couldn't create TODO");
            console.log(err.message);
        });
}

  return (
    <section className="container">
      <section className="contents">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            className="input"
          />
          <label className="label" htmlFor="assignTo">
            AssignTo
          </label>
          <input
            type="text"
            name="assignTo"
            value={data.assignTo}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">
            Add Task
          </button>
        </form>
      </section>
    </section>
  );
}




