import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TrayIcon } from '@tauri-apps/api/tray';
import { Menu } from '@tauri-apps/api/menu';
import { defaultWindowIcon } from '@tauri-apps/api/app';



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


const menu = await Menu.new({
  items: [
    {
      id: 'quit',
      text: 'Quit',
      action: () => { alert('Quit') },
    },
  ],
});


await TrayIcon.new({
  // icon: await defaultWindowIcon() ?? '',
  menu: menu,
  menuOnLeftClick: true,
});
