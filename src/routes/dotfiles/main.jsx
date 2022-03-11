import React from 'react'
import Aliases from './aliases'
import CustomScripts from './customScripts'
import Functions from './functions'
import Keybindings from './keybindings'
import Paths from './paths'
import Prompts from './prompt'
import Variables from './variables'

export default function AllDotfiles() {
  return (
    <div className="space-y-3 overflow-auto">
      <Aliases />
      <Variables />
      <Paths />
      <Functions />
      <CustomScripts />
      <Keybindings />
      <Prompts />
    </div>
  )
}
