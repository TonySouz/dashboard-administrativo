import { useState, useContext, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) return null; // segurança para contexto nulo
  const { login } = authContext;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulação de login (substitua pela sua API)
    const fakeUser = { id: '1', name: 'Tony' };
    const fakeToken = '123456';
    login(fakeToken, fakeUser);
    navigate('/users'); // redireciona após login
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
};

export default Login;