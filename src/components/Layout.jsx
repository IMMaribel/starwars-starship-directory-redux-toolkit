import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, UserRound, LogIn} from 'lucide-react';
import logo from '../assets/starWarsLogo.png';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <header className="mb-8 items-center">
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
        <img src={logo} alt="logo" className="-mt-10 ml-6 w-60" />
        <div className="flex font-chackra justify-end items-start">
          <button className="flex px-3 text-gray-400 hover:border-b-2 border-gray-400 hover:text-white">
          <LogIn size={30} color="gray" className="hover:text-white mr-4" />
          LOG IN
          </button>
          <button className="flex px-3 text-gray-400 hover:border-b-2 border-gray-400 hover:text-white">
          <UserRound size={30} color="gray" className="hover:text-white mr-2" />
          SIGN UP
          </button>
        </div>
      </div>
      <div className="flex font-chackra justify-center border-t-2 border-b-2 border-gray-400">
        <Link to="/welcome" className="px-6 py-2 border-l-2 border-r-2 border-gray-400 text-gray-400 hover:border-b-4 hover:border-b-blue-400 hover:text-white">
        HOME
        </Link>
        <Link to="/" className="px-6 py-2 border-l-2 border-r-2 border-gray-400 text-gray-400 hover:border-b-4 hover:border-b-blue-400 hover:text-white">
          STARSHIPS
        </Link>
      </div>
    </header>
  );
}

export default Layout;
