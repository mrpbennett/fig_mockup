import React from 'react';
import { Link } from 'react-router-dom';
import {
  LightningBoltIcon,
  AdjustmentsIcon,
  DocumentSearchIcon,
  VariableIcon,
  CodeIcon,
  HandIcon,
  TerminalIcon,
} from '@heroicons/react/solid';
import Layout from '../components/layout';
import InnerLayout from '../components/innerLayout';

const DotFileRoutes = [
  {
    icon: (
      <LightningBoltIcon className="h-5 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Aliases',
    to: 'aliases',
  },
  {
    icon: (
      <AdjustmentsIcon className="h-5 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Variables',
    to: 'variables',
  },
  {
    icon: (
      <DocumentSearchIcon className="h-5 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Paths',
    to: 'paths',
  },
  {
    icon: (
      <VariableIcon className="h-5 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Functions',
    to: 'functions',
  },
  {
    icon: (
      <CodeIcon className="h-5 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Custom scripts',
    to: 'custom-scripts',
  },
  {
    icon: (
      <HandIcon className="h-5 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Keybindings',
    to: 'keybindings',
  },
  {
    icon: (
      <TerminalIcon className="h-5 w-auto flex-shrink-0 text-gray-500 group-hover:text-gray-600" />
    ),
    label: 'Prompt',
    to: 'prompt',
  },
];

export default function Dotfiles() {
  return (
    <Layout>
      <InnerLayout title="Dotfiles">
        {DotFileRoutes.map((route) => (
          <Link
            key={route.label}
            to={route.to}
            className={`group flex items-center space-x-2.5 rounded-md border border-transparent px-1.5 py-1 text-sm text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-900 focus:border-gray-200 focus:bg-gray-50 focus:text-gray-900 focus:outline-none ${
              route.active ? 'bg-gray-100 text-gray-900' : null
            }`}
          >
            {route.icon}
            <span className="whitespace-nowrap">{route.label}</span>
          </Link>
        ))}
      </InnerLayout>
    </Layout>
  );
}
