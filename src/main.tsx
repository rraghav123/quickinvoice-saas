import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import './styles/globals.css'
import './styles/tailwind.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Theme appearance="dark">
        <App />
      </Theme>
  </StrictMode>,
)

