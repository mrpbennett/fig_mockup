import React from 'react';
import { Outlet } from 'react-router-dom';

export default function InnerLayout({ children, title }) {
  return (
    <div className="flex h-full w-full flex-row">
      <div className="flex flex-1 flex-col border-r border-gray-200">
        <div className="border-b p-4 text-sm font-semibold text-gray-600">
          {title}
        </div>
        <div className="flex h-full flex-1 flex-col p-2">
          <div className="flex flex-col space-y-2.5 px-2 pl-2">{children}</div>
        </div>
      </div>
      <main className="h-full w-full p-2">
        <Outlet />
      </main>
    </div>
  );
}
