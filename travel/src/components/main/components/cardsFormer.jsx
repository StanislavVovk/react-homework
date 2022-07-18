import TripCard from "./tripCard";
import PropTypes from "prop-types";

const CardsList = (trips, filter) => {
    return (
        <ul className="trip-list">
            {trips.trips.map((trip => (
                <TripCard
                    key={trip.id}
                    image={trip.image}
                    title={trip.title}
                    duration={trip.duration}
                    level={trip.level}
                    link={trip.id}
                    price={trip.price}/>
            )))}
        </ul>
    )
}

CardsList.propTypes = {
    trips: PropTypes.array.isRequired
}
export default CardsList