import React from 'react'
import {Link} from 'react-router-dom'
import {
  ViewGridIcon,
  SparklesIcon,
  EyeIcon,
  AtSymbolIcon,
  ChipIcon,
  CodeIcon,
  ExternalLinkIcon,
  CubeIcon,
} from '@heroicons/react/solid'
import Layout from '../components/layout'
import InnerLayout from '../components/innerLayout'

const PluginRoutes = [
  {
    icon: (
      <ViewGridIcon className="h-4 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'All',
    to: 'all',
  },
  {
    icon: (
      <SparklesIcon className="h-4 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Featured',
    to: 'featured',
  },
  {
    icon: (
      <EyeIcon className="h-4 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Interface',
    to: 'interface',
  },
  {
    icon: (
      <AtSymbolIcon className="h-4 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Completion',
    to: 'completion',
  },
  {
    icon: (
      <ChipIcon className="h-4 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Commands',
    to: 'commands',
  },
  {
    icon: (
      <CodeIcon className="h-4 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Code Display',
    to: 'code-display',
  },
  {
    icon: (
      <ExternalLinkIcon className="h-4 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Integrations',
    to: 'integrations',
  },
  {
    icon: (
      <CubeIcon className="h-4 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Others',
    to: 'others',
  },
]

export default function Plugins() {
  return (
    <Layout>
      <InnerLayout title="Plugins">
        {PluginRoutes.map(route => (
          <Link
            key={route.label}
            to={route.to}
            className={`group flex items-center space-x-2.5 rounded-md border border-transparent px-1.5 py-1 text-sm text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900 focus:border-gray-200 focus:bg-gray-50 focus:text-gray-900 focus:outline-none ${
              route.active ? 'bg-gray-100 text-gray-900' : null
            }`}
          >
            {route.icon}
            <span className="whitespace-nowrap text-xs">{route.label}</span>
          </Link>
        ))}
      </InnerLayout>
    </Layout>
  )
}
