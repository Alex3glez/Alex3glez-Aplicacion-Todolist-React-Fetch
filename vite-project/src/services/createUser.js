import { use } from "react";

const createUser = async (user) => {
  try {
    const createPostToDo = await fetch(
      `https://playground.4geeks.com/todo/users/${user}`,
      {
        method: "POST",
        headers: {
          accept: "application/json"
        },
        body:""
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default createUser;