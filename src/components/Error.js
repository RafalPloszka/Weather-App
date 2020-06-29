import React from 'react'

const Error = ({error}) => {
    return (
        <div className="error">
            {error} <i className="fas fa-exclamation-triangle"></i>
        </div>
    )
}

export default Error
