import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import './scss/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Apropos from './pages/Apropos'
import Contact from './pages/Contact'
import Realisation from './pages/Realisations'
import './scss/App.scss'
import './scss/Custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="container-fluid">
      <div className='row taille-respon'>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Apropos />} />
              <Route path="Realisation" element={<Realisation />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    <div className='taille-footer'>
      <h6 className='text-light text-center border border-2 d-xl-none p-2 taillepolice mb-0'>Christophe Mestdagh - Copyright 2022</h6>
    </div>
  </React.StrictMode >
)