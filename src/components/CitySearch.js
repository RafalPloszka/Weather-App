import React from 'react';

const CitySearch = (props) => {
    /*const {api_call} = useContext(DataContext)*/
    return (
        <form onSubmit={props.api_call} className="form">
            <input
            name="location"
            type="text"
            className="form-input"
            placeholder="Enter city name..."
            required/>
            <button type="submit" className="btn">
                <i className="fas fa-search"></i>
            </button>
        </form>
    )
}

export default CitySearch
