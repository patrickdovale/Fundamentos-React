import React, { cloneElement } from 'react';

export default function Familia(props) {
    return (
        <>
            {React.Children.map(props.children, (child, i) => {
                return cloneElement(child, {...props, key:i})
            })}
        </>
    )
}