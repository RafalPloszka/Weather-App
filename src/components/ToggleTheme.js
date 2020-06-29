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
				  <img className="power-icon" src={turnoff}/></div>
			) : (
        <div className="toggle-content">
          <p className="lightmode-caption">Lightmode</p>
				  <img className="power-icon" src={turnon}/></div>
			)}
    </div>
		/*<div className="toggle__box">
				<img src={on} style={{width: '20px', height: '20px'}}></img>
			<div className="toggle__btn" onClick={toggleTheme}>
				<input type="checkbox" className="checkbox" onChange={iconChange}  />
				<div className="circle"></div>
				<div className="layer"></div>
			</div>
				<img src={off} style={{width: '20px', height: '20px'}}></img>
    </div>*/
	)
}

export default ToggleTheme;