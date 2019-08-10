import React from 'react';
import { Link } from 'react-router-dom'

function AdminPage() {

    return (
        <section className="hero is-primary has-text-centered is-fullheight" >
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        WELCOME #ADMIN
                    </h1>
                    <div className="buttons are-large is-centered">
                        <Link to="/applicants" className="button is-success">Applicants</Link>
                        <Link to="/#" className="button is-info">New Form</Link>
                        <Link to="/#" className="button is-danger">New Admin</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminPage

