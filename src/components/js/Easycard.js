import React from 'react'

import "../css/Easycard.css"

import "../../images/icon-api.svg"
import "../../images/icon-budgeting.svg"
import "../../images/icon-onboarding.svg"
import "../../images/icon-online.svg"


function Easycard(props) {
    return (
        <div className="easy-card-component">
            <div className="easy-portion-img-container">
                <img src={props.source} alt={props.title}/>
            </div>
            <div className="easy-portion-title title">{props.title}</div>
            <div className="easy-portion-content paragraph">{props.content}</div>
        </div>
    )
}

export default Easycard
