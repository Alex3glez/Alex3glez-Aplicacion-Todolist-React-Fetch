import { useEffect, useState } from "react";
import "./App.css";
import { createUser, deleteToDo, deleteUser, getListData, getUserData, postToDo } from "./services/toDoServices";


function App() {
    const [lista, setLista] = useState([]);
  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState("");

  useEffect(() => {
    const comprobarDatos= async()=>{
     const users= await getUserData(setUserList);

      if (users.length > 0) {
      const usuarioPredeterminado = users[0].name;
      setUserSelected(usuarioPredeterminado);
      getListData(setLista, usuarioPredeterminado);
    } else {
      alert("Aún no existen usuarios, crea uno");
    }
  };
  comprobarDatos();
}, []);

  const añadirToDo = async ({ target, key }) => {
    if (key === "Enter" && target.value.trim() != "") {
      await postToDo(target.value.trim(), userSelected);
      getListData(setLista, userSelected);
      target.value = "";
    }
  };

  const removeLi = async (idBorrar) => {
    await deleteToDo(idBorrar);
    getListData(setLista, userSelected);
  };

  const selectUser = ({ target }) => {
    setUserSelected(target.value);
    getListData(setLista, target.value);
  };

/*   const crearUsuario = async ({ target, key }) => {
    if (key === "Enter" && target.value.trim() != "") {
      await createUser(target.value.trim());
      await getUserData(setUserList);
      getListData(setLista, target.value.trim());
      setUserSelected(target.value.trim());
      target.value = "";
    }
  }; //esta función era para el onKeyDown del input antes de hacer el form */

  const createUsuario = async (e) => {
    try {
      /*  for (let index = 0; index < userList.length; index++) {
        if (userList[index].name==e.target[0].value) {
          return alert("Ese usuario ya existe")
        }
      }  */
      
      e.preventDefault()
      await createUser(e.target[0].value.trim());
      await getUserData(setUserList);
      getListData(setLista, e.target[0].value.trim());
      setUserSelected(e.target[0].value.trim());
      e.target[0].value = "";
      e.target[1].checked=false;
    } catch (error) {alert(error);
    
      
    }
    
  };

  /* const borrarUsuario = async ({ target, key }) => {
    if (key === "Enter" && target.value.trim() != "") {
      await deleteUser(target.value.trim());
      await getUserData(setUserList);
      const nuevoUsuario = userList[0].name || "";
      setUserSelected(nuevoUsuario);
      getListData(setLista, nuevoUsuario);
      target.value = "";
    }

  }; //esta función era para el onKeyDown del input antes de hacer el form*/

   const deleteUsuario = async (e) => {
    try {
       e.preventDefault()
      await deleteUser(e.target[0].value.trim());
      await getUserData(setUserList);
      const nuevoUsuario = userList[0].name || "";
      setUserSelected(nuevoUsuario);
      getListData(setLista, nuevoUsuario);
      e.target[0].value = "";
      e.target[1].checked=false;
    } catch (error) {alert(error);
    
      
    }
    

  };



  const borrarTodo= async()=>{
    try {
       for (let index = 0; index < lista.length; index++) {
      await deleteToDo(lista[index].id);
      
    }
    await getListData(setLista, userSelected)
      
    } catch (error) { console.log(error);
    
      
    }
    }
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h2 className="text-light">Espia de lista de tareas</h2>
          <div className="text-light">
            
            <form onSubmit={createUsuario}>
              <h4 className="mb-2">Crear usuario</h4>
            <input className="mb-2" name="creacion-usuario" type="text" required /> <br />
            <label className="mb-2" htmlFor="acept">Aceptar condiciones</label>
            <input className="m-2" type="checkbox"  id="acept" required /> <br />
            <button className="mb-2" type="submit">Crear usuario</button>
            </form>
          </div>
          <div className="text-light">
            
            <form onSubmit={deleteUsuario}>
              <h4 className="mb-2">Borrar usuario</h4>
            <input className="mb-2" name="borrar-usuario" type="text" required/> <br />
            <label className="mb-2" htmlFor="ensure">Estoy seguro</label>
            <input className="m-2" type="checkbox"  id="ensure" required /> <br />
            <button className="mb-2" type="submit">Borrar usuario</button>
            </form>
          </div>
          <div>
            <h4 className="text-light">Selecciona lista</h4>
            <select onChange={selectUser} name="usuarios" id="usuarios" value={userSelected}>
              {userList.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center h-50 col-10 col-md-6 bg-secondary bg-gradient  rounded">
          <h1 className="m-2">Lista de {userSelected}</h1>
          <div className="d-flex justify-content-center align-items-center">
            {lista.length === 0 && (
              <div className="alert alert-warning w-75" role="alert">
                No hay tareas, añadir tareas
              </div>
            )}
          </div>
          <div className="col-10 col-sm-8 col-md-6 mx-auto my-3">
            <input
              onKeyDown={añadirToDo}
              type="text"
              className="form-control text-center mb-2"
              placeholder="Añade algo que hacer"
              aria-label="Username"
              aria-describedby="visible-addon"
            />
            <ul className="list-group">
              {lista.map((toDo) => (
                <li
                  className="list-group-item list-group-item-action d-flex justify-content-between"
                  key={toDo.id}
                >
                  {toDo.label}{" "}
                  <button
                    onClick={() => removeLi(toDo.id)}
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                </li>
              ))}
            </ul>
            <button title="¡CUIDADO! borra toda la lista"  className="m-2" onClick={borrarTodo}>Botón Nucelar</button>
           
          </div>
        </div>
      </div>
    </>
  );
  
}

export default App;
