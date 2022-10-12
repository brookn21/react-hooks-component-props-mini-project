import React from "react";

function Header(props){
    const { data } = props
    return(
    <header>
    <h1>{data.name}</h1>
    </header>
    )
}

export default Header;