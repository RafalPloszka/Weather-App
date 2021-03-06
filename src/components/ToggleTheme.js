import React, { useState, useContext } from 'react';
import turnon from '../icons/turnon.svg';
import turnoff from '../icons/turnoff.svg';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleTheme = () => {
	const { toggleTheme } = useContext(ThemeContext);
	const [icon, setIcon] = useState(true);

	const iconChange = () => {
		let newIcon = !icon;
		setIcon(newIcon);
	}

	return (
    <div className="toggle-btn" onClick={()=> {toggleTheme(); iconChange()}} >

      {icon ? (
        <div className="toggle-content">
          <p>Darkmode</p>
				  <img className="power-icon" src={turnoff} alt="darkmode icon"/></div>
			) : (
        <div className="toggle-content">
          <p className="lightmode-caption">Lightmode</p>
				  <img className="power-icon" src={turnon} alt="lightmode icon"/></div>
			)}
    </div>
	)
}

export default ToggleTheme;