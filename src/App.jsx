import React from 'react'
import './App.css'
import { Navbar } from './components'
import { AboutUs, Chef, Findus, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container'

const App = () => {

    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <Findus />
            <Footer />
        </div>
    )
}

export default App