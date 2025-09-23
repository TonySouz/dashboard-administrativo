import { createContext, useEffect, useState, type ReactNode } from 'react';

// Tipo do usuário (ajuste conforme suas propriedades)
interface User {
  id: string;
  name: string;
  // outras propriedades do usuário
}

// Tipo do contexto
interface AuthContextType {
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
}

// Importante: tipagem inicial como null
export const AuthContext = createContext<AuthContextType | null>(null);

// Props do provider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      return JSON.parse(localStorage.getItem('user') || 'null');
    } catch {
      return null;
    }
  });

  useEffect(() => {
    // opcional: refresh token logic
  }, []);

  const login = (token: string, userData: User) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};