
const UserRow = ({user}) => {
  return (
    <>
    <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.status}</td>
                            <td>
                                <img src={user.image}
                                className="img-thumbmail"
                                style={{
                                    width: 50
                                    }} alt="" />
                            </td>
                        </tr>
    </>
  )
}

export default UserRow