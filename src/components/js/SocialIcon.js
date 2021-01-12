import React from 'react'

// import Facebook from "../../images/icon-facebook.svg"
// import Youtube from "../../images/icon-youtube.svg"
// import Twitter from "../../images/icon-twitter.svg"
// import Pinterest from "../../images/icon-pinterest.svg"
// import Instagram from "../../images/icon-instagram.svg"

function SocialIcon(props) {
    return (
        <div className="social-icons-div">
            <img src={props.source} alt={props.name}/>
        </div>
    )
}

export default SocialIcon
