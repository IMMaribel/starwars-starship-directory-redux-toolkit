import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, UserCircle, LogIn, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../stores/authSlice';
import logo from '../assets/starWarsLogo.png';

const Header = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="mb-8 items-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-2 items-start mt-4">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Facebook size={32} color="gray" className="hover:text-white" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Instagram size={32} color="gray" className="hover:text-white" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Twitter size={32} color="gray" className="hover:text-white" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Youtube size={32} color="gray" className="hover:text-white" />
            </button>
          </div>
          
          <img src={logo} alt="Star Wars Logo" className="-mt-10 ml-6 w-60" />
          
          <div className="flex font-chackra justify-end items-start">
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                <span className="text-yellow-500">
                  <UserCircle className="inline-block mr-2" size={24} />
                  {user.userName}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 text-gray-400 hover:border-b-2 border-gray-400 hover:text-white"
                >
                  <LogOut size={24} className="mr-2" />
                  LOGOUT
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="flex px-3 text-gray-400 hover:border-b-2 border-gray-400 hover:text-white">
                  <LogIn size={24} className="mr-2" />
                  LOG IN
                </Link>
                <Link to="/register" className="flex px-3 text-gray-400 hover:border-b-2 border-gray-400 hover:text-white">
                  <UserCircle size={24} className="mr-2" />
                  SIGN UP
                </Link>
              </>
            )}
          </div>
        </div>
        
        <div className="flex font-chackra justify-center border-t-2 border-b-2 border-gray-400 mt-4">
          <Link to="/welcome" className="px-6 py-2 border-l-2 border-r-2 border-gray-400 text-gray-400 hover:border-b-4 hover:border-b-blue-400 hover:text-white">
            HOME
          </Link>
          <Link to="/" className="px-6 py-2 border-l-2 border-r-2 border-gray-400 text-gray-400 hover:border-b-4 hover:border-b-blue-400 hover:text-white">
            STARSHIPS
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;