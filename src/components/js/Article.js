import React from 'react'

import "../css/Article.css"

import "../../images/image-confetti.jpg"
import "../../images/image-currency.jpg"
import "../../images/image-plane.jpg"
import "../../images/image-restaurant.jpg"


function Article(props) {
    return (
        <div className="latest-articles-component">
            <div className="latest-articles-img">
                <img src={props.source} alt={props.author}/>
            </div>
            <div className="latest-articles-content-holder">
                <div className="latest-articles-author paragraph">{props.author}</div>
                <div className="latest-articles-title title">{props.title}</div>
                <div className="latest-articles-content paragraph">{props.content}</div>
            </div>
        </div>
    )
}

export default Article
