import { use } from "react";

const getUserData= async(setUserList)=>{
try {
        const response=  await fetch('https://playground.4geeks.com/todo/users?offset=0&limit=100');
        const users= await response.json();
        setUserList(users.users)

        return users.users
        
} catch (error) {console.log(error)
        return []
}
 
}
export default getUserData

