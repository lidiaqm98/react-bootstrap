import UserRow from "../components/UserRow";
import useUsers from "../hooks/useUsers"

const UserPage = () => {

   const {Users} = useUsers();
    

  return (
    <div className="mt-5">
        <h2>Users</h2>
        <hr />
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>nombre</th>
                    <th>status</th>
                    <th>imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    Users.map(user=> (
                        <UserRow 
                         key={user.id}
                         user={user}/>
                    ) )
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default UserPage