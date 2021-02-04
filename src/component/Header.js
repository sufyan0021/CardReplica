import React from 'react'
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <div className='headerComp'>
            <h2>Message Centre</h2>
            <Button variant="danger">Create New Request</Button>
        </div>
    )
}

export default Header
