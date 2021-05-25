import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>阿公店開店日選擇</h1>
        </header>
    )
}

const headerStyle = {
    background: '#5F9EA0',
    color: '#FFFFE0',
    textAlign: 'center',
    padding: '10px',
    fontsize:'xx-large',
}


export default Header;