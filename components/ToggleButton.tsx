import React from 'react'

const ToggleButton = ({toggleSubNav}: {toggleSubNav: ()=>void}) => {
    return (
        <label onClick={toggleSubNav} className="toggle-container md:hidden my-auto">
            <input id='navbarToggle' type="checkbox" />
                <div onClick={toggleSubNav}  className="checkmark">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </label>
    )
}

export default ToggleButton