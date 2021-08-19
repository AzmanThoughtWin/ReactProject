import React from 'react'

export const Greet = props => {
    const {name, heroName, children} = props;
    return (
        <div>
            <h1 className="p2">Hello {name} aka {heroName}</h1>
            {children}
        </div>
    )
}  

// export default Greet;