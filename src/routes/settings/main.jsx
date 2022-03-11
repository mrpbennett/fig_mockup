import React from 'react'
import {Link} from 'react-router-dom'
import SettingsLayout from '../../components/settingsLayout'

export default function Account() {
  return (
    <SettingsLayout>
      <Link to="general">General</Link>
      <Link to="account">
        <div className="border border-y border-gray-300 text-sm">Account</div>
      </Link>
    </SettingsLayout>
  )
}
