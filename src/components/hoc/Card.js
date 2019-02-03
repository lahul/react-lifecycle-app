import React from 'react';

const Card = (props) =>{
    const s = {
        background:'lightgrey',
    }
    return(
        <div style = {s}>
            {props.children}
        </div>
    )
}

export default Card;