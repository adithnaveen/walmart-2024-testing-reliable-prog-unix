import React from 'react'


function AppFooter(props) {
    console.log(props);
    return (
        <div>
            <hr />
            <p>Copy Right reserved - Walmart - {props.year} </p>
        </div>
    )
}
export default AppFooter; 