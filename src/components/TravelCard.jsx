import React from "react";

export default function TravelCard(props) {
    const {imageUrl, location, googleMapsurl, title, startDate, endDate, description} = props.item
    return (
        <section className="travel">
            <img src={imageUrl} className="travel--img" />
            <div className="travel--info">
                <div>
                    <img src="./marker.png" />
                    <span className="travel--info-ctry">{location}</span>
                    <p className="travel--info-google"><a href={googleMapsurl}>View on Google Maps</a></p>
                </div>
                <h2 className="travel--dest">{title}</h2>
                <p className="travel--period">{startDate} - {endDate}</p>
                <p className="travel--desc">
                    {description}
                </p>
            </div>
        </section>
    )
}