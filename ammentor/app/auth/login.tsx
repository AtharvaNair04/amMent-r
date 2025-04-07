
"use client";

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import TextInput from '../components/TextInput';
import Button from '../components/button';
import RoleSelector from '../components/roleSelector';

type Role = 'mentor' | 'mentee';

const Login: React.FC = () => {
  const router = useRouter();
  const [role, setRole] = useState<Role>('mentee');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    router.push('/dashboard');

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <RoleSelector selectedRole={role} setSelectedRole={setRole} />
          
          <TextInput
            label="Username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
          
          <Button type="submit" fullWidth variant="primary">
            Login as {role === 'mentee' ? 'Mentee' : 'Mentor'}
          </Button>
          
          <div className="text-center text-sm">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Forgot password?
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;