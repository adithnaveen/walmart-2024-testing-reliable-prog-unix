import React from 'react'
import './css/app-footer.css'

function AppFooter(props) {
    console.log(props);
    return (
        <div className="app-footer">
            <hr />
            <p>Copy Right reserved - Walmart - {props.year} </p>
        </div>
    )
}
export default AppFooter; 