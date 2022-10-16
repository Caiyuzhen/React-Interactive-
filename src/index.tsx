import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PageTwo from './Pages/Login';
import router from './Router/index'
import { RouterProvider } from 'react-router-dom'//1.引入路由组件根方法



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<RouterProvider router={router}/>
    // <App />
);

