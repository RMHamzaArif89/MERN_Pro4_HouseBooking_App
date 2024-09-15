import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CityContextProvider} from '../Context/CityContext.jsx'
import { HouseContextProvider } from '../Context/HouseContext.jsx'
import { AdminContextProvider } from '../Context/contextApi/AdminContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CityContextProvider>
     <HouseContextProvider>
     <AdminContextProvider>
     <App/>
     </AdminContextProvider>
     </HouseContextProvider>
    </CityContextProvider>
  </React.StrictMode>,
)
