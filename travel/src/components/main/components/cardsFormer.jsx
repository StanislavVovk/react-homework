import TripCard from "./tripCard";


const CardsList = ( { trips, duration, difficulty}) => {
    if (duration) {
        if (duration === "0_x_5") {
            trips = trips.filter(trip => trip.duration <= 5);
        }
        else if (duration === "5_x_10") {
            trips = trips.filter(trip => trip.duration <= 10 && trip.duration > 5);
        }
        else if (duration === "10_x") {
            trips = trips.filter(trip => trip.duration > 10);
        }
    }
    if (difficulty) {
        if (difficulty === "easy") {
            trips = trips.filter(trip => trip.level === "easy");
        }
        else if (difficulty === "moderate") {
            trips = trips.filter(trip => trip.level === "moderate");
        }
        else if (difficulty === "difficult") {
            trips = trips.filter(trip => trip.level === "difficult");
        }
    }
    return (
        <ul className="trip-list">
            {trips.map((trip => (
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

export default CardsList