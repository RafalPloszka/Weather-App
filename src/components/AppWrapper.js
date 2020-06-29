import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const AppWrapper = (props) => {
    const { lightTheme } = useContext(ThemeContext);
    const theme = !lightTheme ? ' darkmode' : '';
    return (
        <div className={"app-wrapper" + (theme)}>
            {props.children}
        </div>
    )
}

export default AppWrapper
