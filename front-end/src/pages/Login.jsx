import React, { useContext, useState } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [err,setErr]=useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try{
      const data = await api.login({ email, password });
      login(data.token, data.user);
      navigate('/');
    } catch(err){
      setErr(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      {err && <div className="alert alert-danger">{err}</div>}
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="form-control mb-2" placeholder="Senha" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
}