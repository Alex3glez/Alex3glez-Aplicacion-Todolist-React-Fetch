const deleteUser= async(user)=>{
    try {
        const response = await fetch(`https://playground.4geeks.com/todo/users/${user}`, {
            method: "DELETE",
            headers: {'accept': 'application/json'}}
        )
        
    } catch (error) {console.log(error);
    
        
    }
}

export default deleteUser