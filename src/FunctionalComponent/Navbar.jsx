import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {

  let [search, setSearch] = useState("")
  function postSearch(event) {
    event.preventDefault()
    props.changeSearch(search)
    setSearch("")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/" onClick={() => props.changeSearch("")}>News App</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/all" onClick={() => props.changeSearch("")}>All</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/politics" onClick={() => props.changeSearch("")}>Politics</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/crime" onClick={() => props.changeSearch("")}>Crime</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/education" onClick={() => props.changeSearch("")}>Education</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/entertainment" onClick={() => props.changeSearch("")}>Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/science" onClick={() => props.changeSearch("")}>Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-light" aria-current="page" to="/technology" onClick={() => props.changeSearch("")}>Technology</NavLink></li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Others
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/sports" onClick={() => props.changeSearch("")}>Sports</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/cricket" onClick={() => props.changeSearch("")}>Cricket</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/olympics" onClick={() => props.changeSearch("")}>Olympics</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/economics" onClick={() => props.changeSearch("")}>Economics</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/health" onClick={() => props.changeSearch("")}>Health</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/world" onClick={() => props.changeSearch("")}>World</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/jokes" onClick={() => props.changeSearch("")}>Jokes</NavLink></li>

                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </a>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={() => props.changeLanguage("hi")}>Hindi</button></li>
                  <li><button className="dropdown-item" onClick={() => props.changeLanguage("en")}>English</button></li>
                </ul>
              </li>

            </ul>
            <form className="d-flex" role="search" onSubmit={postSearch}>
              <input className="form-control me-2" type="search" name='search' value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
