interface Produto {
  id: string;
  nome: string;
  preco: number;
}

const Produto = () => {
  // Dados simulados (substitua pela API)
  const produtos: Produto[] = [
    { id: '1', nome: 'Notebook', preco: 3500 },
    { id: '2', nome: 'Mouse', preco: 120 },
    { id: '3', nome: 'Teclado', preco: 250 },
  ];

  return (
    <div className="container mt-5">
      <h2>Produtos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Produto;