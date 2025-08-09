import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            language: "hi",
            search: ""
        }
        this.changeLanguage = this.changeLanguage.bind(this)
        this.changeSearch = this.changeSearch.bind(this)
    }
    changeLanguage(input) {
        this.setState({ language: input })
    }
    changeSearch(input) {
        this.setState({ search: input })
    }
    
    render() {
        return (
            <BrowserRouter>
                <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch} />
                <Routes>
                    <Route path='' element={< Home search={this.state.search} language={this.state.language} q="All" />} />
                    <Route path='/all' element={< Home search={this.state.search} language={this.state.language} q="All" />} />
                    <Route path='/politics' element={< Home search={this.state.search} language={this.state.language} q="Politics" />} />
                    <Route path='/crime' element={< Home search={this.state.search} language={this.state.language} q="Crime" />} />
                    <Route path='/education' element={< Home search={this.state.search} language={this.state.language} q="Education" />} />
                    <Route path='/entertainment' element={< Home search={this.state.search} language={this.state.language} q="Entertainment" />} />
                    <Route path='/science' element={< Home search={this.state.search} language={this.state.language} q="Science" />} />
                    <Route path='/technology' element={< Home search={this.state.search} language={this.state.language} q="Technology" />} />
                    <Route path='/sports' element={< Home search={this.state.search} language={this.state.language} q="Sports" />} />
                    <Route path='/cricket' element={< Home search={this.state.search} language={this.state.language} q="Cricket" />} />
                    <Route path='/olympics' element={< Home search={this.state.search} language={this.state.language} q="Olympics" />} />
                    <Route path='/economics' element={< Home search={this.state.search} language={this.state.language} q="Economics" />} />
                    <Route path='/world' element={< Home search={this.state.search} language={this.state.language} q="World" />} />
                    <Route path='/health' element={< Home search={this.state.search} language={this.state.language} q="Health" />} />
                    <Route path='/jokes' element={< Home search={this.state.search} language={this.state.language} q="Jokes" />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
}
