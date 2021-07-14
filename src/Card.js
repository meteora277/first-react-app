import React from 'react';
import PropTypes from 'prop-types';

function Card(props){
    console.log(props)
 
    return (

        <div>
            <img src={props.uwu} alt="" />
        </div>

    )
}

Card.propTypes ={

    uwu: PropTypes.string

}

export default Card