import React from "react";

export default function TravelCard(props) {
    return (
        <section className="travel">
            <img src={props.item.imageUrl} className="travel--img" />
            <div className="travel--info">
                <div>
                    <img src="./marker.png" />
                    <span className="travel--info-ctry">{props.item.location}</span>
                    <p className="travel--info-google"><a href={props.item.googleMapsurl}>View on Google Maps</a></p>
                </div>
                <h2 className="travel--dest">{props.item.title}</h2>
                <p className="travel--period">{props.item.startDate} - {props.item.endDate}</p>
                <p className="travel--desc">
                    {props.item.description}
                </p>
            </div>
        </section>
    )
}