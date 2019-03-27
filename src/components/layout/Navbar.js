import React from 'react';
import { Link } from 'react-router-dom';
// Custom Compnents
import SignedInLinks from './SignedInLinks';
import SignedUpLinks from './SignedUpLinks';

export default () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">ProjectPlan</Link>
                <SignedInLinks />
                <SignedUpLinks />
            </div>   
        </nav>
    )
}