import React from 'react';
import { Link } from 'react-router-dom';

const GeneralRoutes = [
  {
    name: 'Application',
    to: 'application',
  },
  {
    name: 'Integrations',
    to: 'integrations',
  },
  {
    name: 'Dotfiles',
    to: 'dotfiles',
  },
];

export default function General() {
  return (
    <>
      {GeneralRoutes.map((route) => (
        <Link
          key={route.name}
          to={route.to}
          className={`group flex items-center space-x-2.5 rounded-md border border-transparent px-1.5 py-1 text-sm text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900 focus:border-gray-200 focus:bg-gray-50 focus:text-gray-900 focus:outline-none ${
            route.active ? 'bg-gray-100 text-gray-900' : null
          }`}
        >
          <span className="whitespace-nowrap">{route.name}</span>
        </Link>
      ))}
    </>
  );
}
