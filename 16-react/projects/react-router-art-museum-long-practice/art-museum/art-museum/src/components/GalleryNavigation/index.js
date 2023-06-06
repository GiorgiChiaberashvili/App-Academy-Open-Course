import React from 'react';
import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css'

function GalleryNavigation({ galleries }) {

    // console.log(galleries)

    const navItems = galleries.map((gallery) => (
        <li>
            <NavLink key={gallery.id} to={'/galleries/${gallery.id}'}>
                {gallery.name}
            </NavLink>
        </li>
    ));

    return (
        <div>
            <nav>
                <NavLink to='/'>Home </NavLink>
                <h1>Galleries</h1>
                <ul>{navItems}</ul>
            </nav>
        </div >
    );
};

export default GalleryNavigation;

// console.log(GalleryNavigation)
