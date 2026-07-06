
const UserRow = ({ user }) => {
  const collapseId = `collapse-${user.id}`;

  return (
    <>
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>
          <img src={user.image}
                    className="img-thumbmail"
                    style={{ width: 50 }} alt="" />
        </td>
        <td>
          <div class="accordion" id={user.id}>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button className="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={`#${collapseId}`} 
                aria-expanded="false" 
                aria-controls={collapseId}>
                 Desplegar Episodios 
                </button>
              </h2>
              <div id={collapseId} className="accordion-collapse collapse">
                <div class="accordion-body">                  
                  <ul>
                    {/* CORREGIDO: Mapeamos directo desde user.episode */}
                    {/* Usamos "linkEpisodio" como variable temporal para cada elemento */}
                    {user.episode && user.episode.map((linkEpisodio, indice) => (
                      <li key={indice}>{linkEpisodio}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default UserRow