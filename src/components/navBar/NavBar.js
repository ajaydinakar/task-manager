import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">Team Task Manager</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class="nav-link"  to="/">Home<span class="sr-only">(current)</span></Link>
       
      </li>
      <li class="nav-item">
      <Link class="nav-link"  to="/dashboard/">Dashboard</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link"  to="/callender/">Callender</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link"  to="/about/">About</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link"  to="/stub/">Stub</Link>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
    </div>
  )
}
