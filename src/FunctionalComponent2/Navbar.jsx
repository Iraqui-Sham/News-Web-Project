import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar(props) {

  let [search, setSearch] = useState("")
  let navigate = useNavigate()

  function postSearch(event) {
    event.preventDefault()
    navigate("/?q="+search)        // query parameter me pass kar diye.
    setSearch("")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/" >News App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/?q=all" >All</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/?q=politics" >Politics</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/?q=crime" >Crime</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/?q=education" >Education</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/?q=entertainment" >Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/?q=science" >Science</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/?q=technology" >Technology</Link></li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Others
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/?q=sports" >Sports</Link></li>
                  <li><Link className="dropdown-item" to="/?q=cricket" >Cricket</Link></li>
                  <li><Link className="dropdown-item" to="/?q=olympics" >Olympics</Link></li>
                  <li><Link className="dropdown-item" to="/?q=economics" >Economics</Link></li>
                  <li><Link className="dropdown-item" to="/?q=health" >Health</Link></li>
                  <li><Link className="dropdown-item" to="/?q=world" >World</Link></li>
                  <li><Link className="dropdown-item" to="/?q=jokes" >Jokes</Link></li>

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
