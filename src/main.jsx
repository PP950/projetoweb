import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import Produtos from './routes/Produtos.jsx'
import CadastrarProdutos from './routes/CadastrarProduto.jsx'
import Error from './routes/Error.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
