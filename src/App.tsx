import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Apropos from './pages/Apropos'
import Contact from './pages/Contact'
import Realisation from './pages/Realisations'
import Error404 from './pages/Error404';


function App() {

    return (
        <div className="App bg-dark">
            <React.StrictMode>
                <div className="container-fluid">
                    <div className='row taille-respon'>
                        <Nav/>
                        <BrowserRouter>
                            <Routes>
                                <Route path="">
                                    <Route index element={<Apropos/>}/>
                                    <Route path="Realisation" element={<Realisation/>}/>
                                    <Route path="contact" element={<Contact/>}/>
                                    <Route path="*" element={< Error404/>}/>
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
                <div className='taille-footer'>
                    <h6 className='text-light text-center border border-2 d-xl-none p-2 taillepolice mb-0'>Christophe
                        Mestdagh - Copyright 2022</h6>
                </div>
            </React.StrictMode>
        </div>
    )
}

export default App
