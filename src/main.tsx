import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Layout from './layout/index.tsx'
import './styles/global.css'
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
)
