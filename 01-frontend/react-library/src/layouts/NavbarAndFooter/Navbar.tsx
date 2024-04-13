export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
                <span className='navbar-brand'>Luv 2 Read</span>
                <button className='navbar-toggler' type='button'
                    data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false'
                    aria-label='Toggle Navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse" id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className='nav-link'>Search Books</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item m1">
                            <a href="#" type='button' className='btn btn-outline-light'>Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}