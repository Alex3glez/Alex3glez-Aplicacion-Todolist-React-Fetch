import { use } from "react";

const postToDo = async (task, user) => {
  try {
    const createPostToDo = await fetch(
      `https://playground.4geeks.com/todo/todos/${user}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          label: task,
          is_done: false,
        }),
      }
    );

    const newToDo = await createPostToDo.json();
  } catch (error) {
    console.log(error);
  }
};

export default postToDo;
