import {TripDescription} from "./components/trip-component/trip-description";
import Header from "../header/header";
import Modal from "./components/modal/modal";

export const Trip = () => {
    const {pathname} = window.location;
    const id = pathname.slice(13);
    return (
        <div>
            <Header/>
            <main className="trip-page">
                <h1 className="visually-hidden">Travel App</h1>
                <TripDescription id={id}/>
            </main>
        </div>
    )
}

