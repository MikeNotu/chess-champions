import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ChessChampions
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://bateman.studio/"
                >
                  My Website
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/MikeNotu">
                  My GitHub
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/michael-bateman-979695194/"
                >
                  My LinkedIn
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/MikeNotu/chess-champions"
                >
                  This Project's Repository
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.chess.com/news/view/published-data-api"
                >
                  API Used
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
