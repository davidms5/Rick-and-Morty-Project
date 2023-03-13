import React from 'react';
import SearchBar from './SearchBar';
import { Navigate } from './SearchBarStyles';
import {NavLink} from 'react-router-dom';


const Nav = (props) =>{

    const {onSearch} = props;
    return (
        <Navigate>
            <div style={{flexGrow:1}}>
            <h1 >busca algun personaje </h1>
        <SearchBar onSearch={(character) => onSearch(character)}/>
        <NavLink to="About" >About</NavLink>
        <NavLink to="Home" >Home</NavLink>
            </div>
        </Navigate>
    )
}

export default Nav;