import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from './../node_modules/react-query/es/core/queryClient';

const queryClient=new QueryClient() 
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App/>
  </QueryClientProvider>
  
)
