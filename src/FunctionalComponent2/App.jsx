import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default function App() {
    let [language, setLanguage] = useState("hi")

    function changeLanguage(input) {
        setLanguage(input)
    }

    return (
        <BrowserRouter>
            <Navbar changeLanguage={changeLanguage} />
            <Routes>
                <Route path='' element={< Home language={language} />} />
                <Route path='/*' element={< Home language={language} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )

}
