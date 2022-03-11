import React from 'react'

import {integrationPlugins} from '../../data/plugins'

export default function Integrations() {
  return (
    <div className="p-2">
      <h2 className="my-2 font-bold">Integrations</h2>

      <div className="grid h-full grid-cols-2 gap-2">
        {integrationPlugins.map(plugin => (
          <div
            key={plugin.name}
            className="h-30 flex rounded-md border border-gray-200 p-2 shadow hover:border-gray-500"
          >
            <img src={plugin.logo} alt={plugin.name} className="mr-4 h-7 w-7" />
            <div>
              <h3 className="mb-1 text-sm font-bold">{plugin.name}</h3>
              <p className="text-xs text-gray-500">{plugin.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
