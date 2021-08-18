import React from 'react'

export const Greet = props => {
    console.log(props);
    return (
        <div>
            <h1 className="p2">Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>
    )
}  

// export default Greet;