import { useContext } from 'react';
import type { ReactNode } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const context = useContext(AuthContext);

  if (!context || !context.user) return <Navigate to="/login" replace />;

  return <>{children}</>;
}