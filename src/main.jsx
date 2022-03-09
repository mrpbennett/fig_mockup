import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';

// DOTFILE ROUTES
import Dotfiles from './routes/dotfiles';
import Aliases from './routes/dotfiles/aliases';
import Variables from './routes/dotfiles/variables';
import Paths from './routes/dotfiles/paths';
import Functions from './routes/dotfiles/functions';
import CustomScripts from './routes/dotfiles/customScripts';
import Keybindings from './routes/dotfiles/keybindings';
import Prompt from './routes/dotfiles/prompt';

// PLUGIN ROUTES
import Plugins from './routes/plugins';
import All from './routes/plugins/all';
import Featured from './routes/plugins/featured';
import Interface from './routes/plugins/interface';
import Completion from './routes/plugins/completion';
import Commands from './routes/plugins/commands';
import CodeDisplay from './routes/plugins/codeDisplay';
import Integrations from './routes/plugins/integrations';
import Others from './routes/plugins/others';

// AUTOCOMPLETE ROUTES
import AutoComplete from './routes/autocomplete';

// SETTINGS ROUTES
import Settings from './routes/settings';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="dotfiles" element={<Dotfiles />}>
        <Route path="aliases" element={<Aliases />} />
        <Route path="variables" element={<Variables />} />
        <Route path="paths" element={<Paths />} />
        <Route path="functions" element={<Functions />} />
        <Route path="custom-scripts" element={<CustomScripts />} />
        <Route path="keybindings" element={<Keybindings />} />
        <Route path="prompt" element={<Prompt />} />
      </Route>
      <Route path="plugins" element={<Plugins />}>
        <Route path="all" element={<All />} />
        <Route path="featured" element={<Featured />} />
        <Route path="interface" element={<Interface />} />
        <Route path="completion" element={<Completion />} />
        <Route path="commands" element={<Commands />} />
        <Route path="code-display" element={<CodeDisplay />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="others" element={<Others />} />
      </Route>
      <Route path="auto-complete" element={<AutoComplete />}></Route>
      <Route path="settings" element={<Settings />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
