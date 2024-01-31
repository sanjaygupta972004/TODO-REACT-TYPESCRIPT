import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { TodoProvider } from './components/store/TodoContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TodoProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TodoProvider>
)
