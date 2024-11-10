import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../stores/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import starsbg from '../assets/starsbg.mp4';
import { UserCircle } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error } = useSelector((state) => state.auth);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password })).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        const redirectPath = location.state?.from?.pathname || '/starships';
        navigate(redirectPath, { replace: true });
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
      <form onSubmit={handleSubmit} className="absolute bg-gray-800 p-8 rounded space-y-4 w-80">
        <h2 className="text-2xl font-chackra text-center text-white mb-4">
          <UserCircle className="inline-block text-yellow-500 mr-2" size={24} />
          LOGIN
        </h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none font-chackra"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none font-chackra"
          required
        />
        {loading ? (
          <p className="text-yellow-400">Loading...</p> 
        ) : (
          <button type="submit" className="w-full bg-yellow-500 text-gray-900 p-2 rounded hover:bg-yellow-600 transition duration-300 font-chackra">
            LOGIN
          </button>
        )}
        {error && <p className="text-red-500 mt-2 font-chackra">{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;