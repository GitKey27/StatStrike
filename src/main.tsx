import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import WelcomePage from './components/auth/WelcomePage.tsx'
import RegisterPage from './components/auth/RegisterPage.tsx'
import LoginPage from './components/auth/LoginPage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/app', element: <App /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
