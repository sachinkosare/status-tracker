import React from 'react';
import classes from './Header.module.css';

function Header(props) {  
    return (
        <div className={classes.Title}>{props.title} - deployment status tracker</div>
    );
}

export default Header;