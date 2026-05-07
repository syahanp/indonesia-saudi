import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  totalDonation: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Persistence check
  useEffect(() => {
    const savedUser = localStorage.getItem('donatur_session');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string) => {
    // Mock login logic
    const mockUser: User = {
      id: '123',
      name: 'Ahmad Al-Farisi',
      email: email,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad',
      totalDonation: 25400,
    };
    
    setUser(mockUser);
    localStorage.setItem('donatur_session', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('donatur_session');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
