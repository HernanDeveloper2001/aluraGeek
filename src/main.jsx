import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { EquipmentCategoryProvider } from './components/TeamsContext.jsx'
import { FormDataProvider } from './components/formDataContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <EquipmentCategoryProvider>
        <FormDataProvider>
          <App /> 
        </FormDataProvider>
      </EquipmentCategoryProvider>
    </BrowserRouter>
  </React.StrictMode>
)
