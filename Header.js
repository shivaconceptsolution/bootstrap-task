export default function Header()
{
    return(<div className="container-fluid bg-primary">
              <div className="row">
                <div className="col-md-3">
                  <h1>SCS</h1>
                </div>
                <div className="col-md-9">
                <nav className="navbar navbar-expand-sm  navbar-dark">
          <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
                </div>
              </div>

            </div>)
}