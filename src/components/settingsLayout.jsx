import React from 'react'
import PropTypes from 'react'

export default function SettingsLayout({children, title = ''}) {
  SettingsLayout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
  }

  return (
    <div className="flex h-full w-full flex-row">
      <div className="flex flex-1 flex-col">
        <div className="p-4 text-sm font-semibold text-gray-600">{title}</div>
        <div className="flex h-full flex-1 flex-col">
          <div className="flex flex-col space-y-2.5">{children}</div>
        </div>
      </div>
    </div>
  )
}
