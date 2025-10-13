import { useState } from 'react'
import './App.css'

function App() {
  const [lista, setLista] = useState([])
  
const añadirToDo=({target, key})=>{
  if (key==="Enter" && target.value.trim()!=""){
    setLista([...lista, target.value.trim()])
    target.value=""
    }
}

const removeLi= (indexBorrar)=>{
    setLista(lista.filter((nada, index)=>index!==indexBorrar))
  }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='text-center h-50 col-10 col-md-6 bg-secondary bg-gradient  rounded'>
      <h1 className='m-2'>Lista de tareas</h1>
      <div className='d-flex justify-content-center align-items-center'>{lista.length===0 && <div className="alert alert-warning w-75" role="alert">
  No hay tareas, añadir tareas
</div>}</div>
      <div className='col-10 col-sm-8 col-md-6 mx-auto my-3'>
    <input onKeyDown={añadirToDo} type="text" className="form-control text-center mb-2" placeholder="Añade algo que hacer" aria-label="Username" aria-describedby="visible-addon"/>
      <ul className="list-group">
        {lista.map((toDo, index)=>(
          <li className="list-group-item list-group-item-action d-flex justify-content-between" key={index}>{toDo} <button onClick={()=>removeLi(index)} type="button" className="btn-close" aria-label="Close"></button></li>)
        )}
      </ul>
      </div>

    </div>

    </div>
  )
}

export default App
