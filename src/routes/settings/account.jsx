import React from 'react'
import {Link} from 'react-router-dom'

const GeneralRoutes = [
  {
    to: 'account',
  },
]

export default function Account() {
  return (
    <div className="w-full">
      {GeneralRoutes.map(route => (
        <Link
          key={route.to}
          to={route.to}
          className={`group flex items-center space-x-2.5 rounded-md border border-transparent px-1.5 py-1 text-sm text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900 focus:border-gray-200 focus:bg-gray-50 focus:text-gray-900 focus:outline-none ${
            route.active ? 'bg-gray-100 text-gray-900' : null
          }`}
        ></Link>
      ))}
      <div className="h-full w-full px-6 ">
        <h2 className="text-md">Account</h2>

        <div className="my-4 mb-10">
          <p className=" font-bold">User profile</p>
          <div className="my-4 rounded-full border border-dotted border-gray-500  text-center text-sm text-gray-500">
            Coming soon
          </div>
        </div>

        <div className="w-full rounded-md border-2 border-red-500 p-2.5">
          <p className="mb-4 font-bold text-red-500">Danger Zone</p>
          <button className="rounded-md bg-red-500 px-3 py-2 font-medium text-white">
            Uninstall Fig
          </button>
        </div>
      </div>
    </div>
  )
}
