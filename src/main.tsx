import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/App.scss'
import './scss/Custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
