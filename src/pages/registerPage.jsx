import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../stores/authSlice';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import starsbg from '../assets/starsbg.mp4';

const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ userName, email, password })).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        setUserName('');
        setEmail('');
        setPassword('');
        navigate('/'); 
      }
    });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gray-950">
      <video 
        className="absolute inset-0 w-full min-h-full object-cover bg-center"
        src={starsbg}
        autoPlay
        loop
        muted
      />
      <form onSubmit={handleSubmit} className="relative bg-gray-800 p-8 rounded space-y-4 w-80">
        <h2 className="text-2xl font-chackra text-white text-center mb-4">
          <UserPlus className="inline-block text-yellow-500 mr-2" size={24} />
          REGISTER
        </h2>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="User Name"
          className="w-full p-2 rounded bg-gray-700 text-white font-chackra focus:outline-none"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-700 text-white font-chackra focus:outline-none"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700 text-white font-chackra focus:outline-none"
          required
        />
        {loading ? (
          <p className="text-yellow-400">Loading...</p>
        ) : (
          <button type="submit" 
            className="font-chackra w-full bg-yellow-500 text-gray-900 p-2 rounded hover:bg-yellow-600 transition duration-300">
            REGISTER
          </button>
        )}
        {error && <p className="font-chackra text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;