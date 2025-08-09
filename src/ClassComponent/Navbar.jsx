import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }
  postSearch(event) {
    event.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({ search: "" })
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-light" to="/" onClick={()=>this.props.changeSearch("")}>News App</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/all" onClick={()=>this.props.changeSearch("")}>All</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/politics" onClick={()=>this.props.changeSearch("")}>Politics</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/crime" onClick={()=>this.props.changeSearch("")}>Crime</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/education" onClick={()=>this.props.changeSearch("")}>Education</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/entertainment" onClick={()=>this.props.changeSearch("")}>Entertainment</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/science" onClick={()=>this.props.changeSearch("")}>Science</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/technology" onClick={()=>this.props.changeSearch("")}>Technology</NavLink></li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Others
                  </a>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/sports" onClick={()=>this.props.changeSearch("")}>Sports</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/cricket" onClick={()=>this.props.changeSearch("")}>Cricket</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/olympics" onClick={()=>this.props.changeSearch("")}>Olympics</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/economics" onClick={()=>this.props.changeSearch("")}>Economics</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/health" onClick={()=>this.props.changeSearch("")}>Health</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/world" onClick={()=>this.props.changeSearch("")}>World</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/jokes" onClick={()=>this.props.changeSearch("")}>Jokes</NavLink></li>

                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
                  </a>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("hi")}>Hindi</button></li>
                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("en")}>English</button></li>
                  </ul>
                </li>

              </ul>
              <form className="d-flex" role="search" onSubmit={(event) => this.postSearch(event)}>
                <input className="form-control me-2" type="search" name='search' value={this.state.search} onChange={(event) => this.setState({ search: event.target.value })} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
