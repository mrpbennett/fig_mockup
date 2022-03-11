import React from 'react'
import {Link} from 'react-router-dom'
import {
  FolderOpenIcon,
  TerminalIcon,
  QuestionMarkCircleIcon,
  CogIcon,
  ViewGridAddIcon,
} from '@heroicons/react/outline'
import {CubeIcon} from '@heroicons/react/solid'
import PropTypes from 'prop-types'

export default function Main({children}) {
  Main.propTypes = {
    children: PropTypes.node,
  }
  return (
    <div className="flex h-screen items-center justify-center bg-slate-400">
      <div className="flex h-[40rem] w-[60rem] flex-col overflow-y-hidden rounded-lg bg-white shadow-lg">
        <div className="hidden sm:block sm:grow">
          <div className="flex h-full w-full">
            <div className="border-r">
              <Menu />
            </div>
            <main className="h-full w-full">{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}

const MenuRoutes = [
  {
    icon: (
      <FolderOpenIcon className="h-5 w-auto flex-shrink-0 text-gray-400 group-hover:text-gray-600" />
    ),
    label: 'Dotfiles',
    to: '/dotfiles',
  },
  {
    icon: (
      <ViewGridAddIcon className="h-5 w-auto flex-shrink-0 text-gray-400 group-hover:text-gray-600" />
    ),
    label: 'Plugins',
    to: '/plugins',
  },
  {
    icon: (
      <TerminalIcon className="h-5 w-auto flex-shrink-0 text-gray-400 group-hover:text-gray-600" />
    ),
    label: 'Autocomplete',
    to: '/auto-complete',
  },
  {
    icon: (
      <CogIcon className="h-5 w-auto flex-shrink-0 text-gray-400 group-hover:text-gray-600" />
    ),
    label: 'Settings',
    to: '/settings',
  },
]

function Menu() {
  return (
    <div className="flex h-full flex-1 flex-col space-y-5 ">
      <div className="flex space-x-2 p-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>

      <Link to="/" className="flex items-center px-2">
        <CubeIcon className="h-6 w-auto" />
        <span className="ml-2">Fig</span>
      </Link>

      <div className="flex-1">
        <nav className="flex flex-col space-y-1 px-2">
          {MenuRoutes.map(route => (
            <Link
              key={route.label}
              className="group flex items-center space-x-2.5 rounded-md border border-transparent px-1.5 py-1 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:border-gray-200 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
              to={route.to}
            >
              {route.icon}
              <span>{route.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="group w-full border-t p-4 text-gray-400">
        <a
          href="#"
          className="flex items-center space-x-2.5 text-xs group-hover:text-gray-500"
        >
          <QuestionMarkCircleIcon className="h-4 w-auto group-hover:text-gray-500" />
          <span>Help &amp; Support</span>
        </a>
      </div>
    </div>
  )
}
