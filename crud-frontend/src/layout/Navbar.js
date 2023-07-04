import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className='container-fluid'>
                <Link className="navbar-brand" to="/">
                CRUD
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <Link type="button" to="/adduser" className="btn btn-outline-light">Add User</Link>
            </div>
        </nav>
    </>

   
  )
}
