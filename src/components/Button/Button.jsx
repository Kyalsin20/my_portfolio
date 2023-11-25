import React from 'react'

function Button({ type, onClick, btnName }) {
    return (
        <button type={type || "submit"} onClick={onClick}>{btnName}</button>
    )
}

export default Button