import { useEffect, useState } from "react";
import { UsersApi } from "../api/UsersApi"

const useUsers = () => {
   const [Users, setUsers] = useState([]);

    useEffect(()=>{
       getUsers();
    },[])

    const getUsers = async()=>{
        const resp= await UsersApi.get('https://rickandmortyapi.com/api/character')
         /*   .then(resp=> {
                console.log(resp.data.results);

            })*/ ;
            setUsers(resp.data.results);
    }

    return{
        Users
    }

}

export default useUsers