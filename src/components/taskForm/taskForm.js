import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import "./taskForm.css";
function TaskForm(props) {
  // props.sayHello('Hello from TaskForm');
  const addTask = "Add a new task";
  const steps = ["Enter the task title", "Click on add task"];
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => props.addTask(data.title);

  return (
    <>
      <ul>
        {steps.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.title && <span>This field is required</span>}
      <button type="submit">
        {addTask}
      </button>
      </form>
    </>
  );
}

export default memo(TaskForm);

// props children : to consult th children of the component (balise HTML)
