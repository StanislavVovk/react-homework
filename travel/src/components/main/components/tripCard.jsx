import {AppRoute} from "../../../enums/common";
import PropTypes from 'prop-types';

const TripCard = (
  props
) => {
    return (
        <li className="trip-card">
            <img src={props.image} alt={"trip image"}/>
            <div className="trip-card__content">
                <div className="trip-info">
                    <h3 className="trip-info__title">{props.title}</h3>
                    <div className="trip-info__content">
                        <span className="trip-info__duration"><strong>{props.duration}</strong> days</span>
                        <span className="trip-info__level">{props.level}</span>
                    </div>
                </div>
                <div className="trip-price">
                    <span>Price</span>
                    <strong className="trip-price__value">{props.price}</strong>
                </div>
            </div>
            <a href={AppRoute.TRIP_$ID + props.link} className="button">Discover a trip</a>
        </li>
    );
}
TripCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default TripCard