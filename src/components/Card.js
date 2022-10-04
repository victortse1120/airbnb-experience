import React from "react";

function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={props.img} alt='katie-zaferes' className="card--image"/>
        <div className="card--stats">
            <img src={require('../images/star.png')} alt='star' className="card--star"/>
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount})．</span>
            <span className="gray">{props.country}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
}

export default Card;
