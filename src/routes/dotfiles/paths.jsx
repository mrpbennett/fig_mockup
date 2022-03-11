import React from 'react'
import {PlusIcon} from '@heroicons/react/solid'

export default function Paths() {
  return (
    <>
      <div className="flex max-w-xl flex-col overflow-hidden rounded-md border border-gray-100 bg-white text-xs">
        <div className="flex items-center justify-between bg-gray-100 p-2">
          <span className="font-medium text-gray-600">Paths</span>
          <PlusIcon className="h-4 w-4 text-gray-600" />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col p-6">
            <span className="mb-2 text-center text-xs text-gray-400">
              No paths
            </span>
            <div>
              Hit{' '}
              <span className="rounded bg-gray-100 p-1 text-gray-400">C</span>{' '}
              <span className="rounded bg-gray-100 p-1 text-gray-400">P</span>{' '}
              to create
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
