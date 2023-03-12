import React from 'react';
import SearchBar from './SearchBar';
import { Navigate } from './SearchBarStyles';

const Nav = (props) =>{

    const {onSearch} = props;
    return (
        <Navigate>
            <div style={{flexGrow:1}}>
            <h1 >busca algun personaje </h1>
        <SearchBar onSearch={onSearch}/>
            </div>
        </Navigate>
    )
}

export default Nav;