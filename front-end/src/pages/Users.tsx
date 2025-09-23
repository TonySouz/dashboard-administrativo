interface User {
  id: string;
  name: string;
}

const User = () => {
  // Dados simulados (substitua pela API)
  const users: User[] = [
    { id: '1', name: 'Tony' },
    { id: '2', name: 'Maria' },
    { id: '3', name: 'João' },
  ];

  return (
    <div className="container mt-5">
      <h2>Usuários</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;