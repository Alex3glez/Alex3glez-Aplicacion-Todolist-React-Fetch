const deleteToDo = async (id) => {
  try {
    const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {//no entiendo porque borra el id en todos/${id}... como se refiere a mi user?en el metodo get y post si se menciona el user.
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }
      
    });

  } catch (error) {
    console.error(error);
  }
};

export default deleteToDo;