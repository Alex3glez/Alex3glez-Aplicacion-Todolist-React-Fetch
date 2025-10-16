


const getListData= async(setLista, user)=>{
    try {
        const getList= await fetch(
      `https://playground.4geeks.com/todo/users/${user}`) 
    
      const lisData= await getList.json();
      
        setLista(lisData.todos)
    } catch (error) { console.log( "error en  getListData: ", error);
    
        
    }
    
}


export default getListData