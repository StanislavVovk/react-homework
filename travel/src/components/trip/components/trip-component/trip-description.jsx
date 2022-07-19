import {trips} from "../../../main/constants";
import {Modal} from "../modal/modal";
import {useState} from "react";

export const TripDescription = (props) => {
    const {id} = props;
    const {title, image, duration, level, price, description} = trips.find(trip => trip.id === id);

    const [visibility, onClick] = useState(true);

    const handleClick = () => {
        onClick(false);
    }
    console.log(visibility)
    return (
        <div className="trip">
            <img src={image} className="trip__img" alt="trip image"/>
            <div className="trip__content">
                <div className="trip-info">
                    <h3 className="trip-info__title">{title}</h3>
                    <div className="trip-info__content">
                        <span className="trip-info__duration"><strong>{duration}</strong> days</span>
                        <span className="trip-info__level">{level}</span>
                    </div>
                </div>
                <div className="trip__description">
                    {description}
                </div>
                <div className="trip-price">
                    <span>Price</span>
                    <strong className="trip-price__value">{price} $</strong>
                </div>
                <button className="trip__button button" onClick={handleClick}>Book a trip</button>
            </div>
            <Modal visibility={visibility}/>
        </div>

    )
}