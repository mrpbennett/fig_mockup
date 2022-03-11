import React from 'react'
import {Reorder, useDragControls} from 'framer-motion'
import {MdDragIndicator} from 'react-icons/md'
import {PlusIcon} from '@heroicons/react/solid'
import {useState} from 'react'

const aliases = [
  {
    id: 1,
    alias: 'zshconfig',
    path: 'code ~/.zshrc',
  },
  {
    id: 2,
    alias: 'ohmyzsh',
    path: 'code ~/.oh-my-zsh',
  },
  {
    id: 3,
    alias: 'hyperconfig',
    path: 'code ~/.hyper.js',
  },
  {
    id: 4,
    alias: 'eslc',
    path: 'code ~/.dotfiles/.eslintrc.json',
  },
  {
    id: 5,
    alias: 'pi',
    path: 'pipenv install $1',
  },
  {
    id: 6,
    alias: 'pr',
    path: 'pipenv run python $1',
  },
  {
    id: 7,
    alias: 'dev',
    path: 'cd ~/Developer',
  },
]

export default function Aliases() {
  const [items, setItems] = useState(aliases)

  const dragControls = useDragControls()

  function startDrag(event) {
    dragControls.start(event, {snapToCursor: true})
  }

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-md border border-gray-100 bg-white text-xs">
        <div className="flex items-center justify-between bg-gray-100 p-2">
          <span className="font-medium text-gray-600">Aliases</span>
          <PlusIcon className="h-4 w-4 text-gray-600" />
        </div>
        <Reorder.Group axis="y" values={items} onReorder={setItems}>
          {items.map(item => (
            <Reorder.Item
              key={item.id}
              value={item}
              className=" px-2 py-1 font-mono"
            >
              <div className="flex items-center justify-between">
                <div className="mr-4 w-40 text-left">
                  <span>{item.alias}</span>
                </div>
                <div className="w-full text-left">
                  <span>{item.path}</span>
                </div>
                <MdDragIndicator
                  className="h-4 w-4"
                  onPointerDown={startDrag}
                />
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </>
  )
}
