import React from 'react';
import PropTypes from 'prop-types';

function Card(props){
    console.log(props)
 
    return (

        <div>
            <h1>{props.title}</h1>
            <img src={props.uwu} alt="" />
        </div>

    )
}

Card.propTypes ={

    uwu: PropTypes.string,
    title: PropTypes.string

}

export default Card