import { use } from "react";

export const createUser = async (user) => {
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

export const deleteToDo = async (id) => {
  try {
    const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
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

export const deleteUser= async(user)=>{
    try {
        const response = await fetch(`https://playground.4geeks.com/todo/users/${user}`, {
            method: "DELETE",
            headers: {'accept': 'application/json'}}
        )
        
    } catch (error) {console.log(error);
    
        
    }
};

export const getListData= async(setLista, user)=>{
    try {
        const getList= await fetch(
      `https://playground.4geeks.com/todo/users/${user}`) 
    
      const lisData= await getList.json();
      
        setLista(lisData.todos)
    } catch (error) { console.log( "error en  getListData: ", error);
    
        
    }
    
};

export const getUserData= async(setUserList)=>{
try {
        const response=  await fetch('https://playground.4geeks.com/todo/users?offset=0&limit=100');
        const users= await response.json();
        setUserList(users.users)

        return users.users
        
} catch (error) {console.log(error)
        return []
}
 
};

export const postToDo = async (task, user) => {
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