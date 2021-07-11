import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = () =>{
    return(
<>
<nav className="navbar navbar-expand-lg nav-bar">
{/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}

  <div className="container-fluid">
    <a className="navbar-brand" href="www.google.com">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="www.google.com">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="www.google.com">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="www.google.com" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="www.google.com">Action</a></li>
            <li><a className="dropdown-item" href="www.google.com">Another action</a></li>
            <li><a className="dropdown-item" href="www.google.com">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
        )
}