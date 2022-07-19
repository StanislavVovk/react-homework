import Header from "../header/header";
import CardsList from "./components/cardsFormer";
import {trips} from "./constants";
import {useState} from "react";


const Main = () => {
    const [duration, setDuration] = useState("");

    const [difficulty, setDifficulty] = useState("");

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleDifficultChange = (e) => {
        return setDifficulty(e.target.value);
    }

    const handleDurationChange = (e) => {
        return setDuration(e.target.value);

    }
    return (
        <>
            <Header/>
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <section className="trips-filter">
                    <h2 className="visually-hidden">Trips filter</h2>
                    <form className="trips-filter__form" autoComplete="off">
                        <label className="trips-filter__search input">
                            <span className="visually-hidden">Search by name</span>
                            <input name="search" type="search" placeholder="search by title" onChange={handleSearch}/>
                        </label>
                        <label className="select">
                            <span className="visually-hidden">Search by duration</span>
                            <select name="duration" onChange={handleDurationChange}>
                                <option value="">duration</option>
                                <option value="0_x_5">&lt; 5 days</option>
                                <option value="5_x_10">&lt; 10 days</option>
                                <option value="10_x">&ge; 10 days</option>
                            </select>
                        </label>
                        <label className="select">
                            <span className="visually-hidden">Search by level</span>
                            <select name="level" onChange={handleDifficultChange}>
                                <option value="">level</option>
                                <option value="easy">easy</option>
                                <option value="moderate">moderate</option>
                                <option value="difficult">difficult</option>
                            </select>
                        </label>
                    </form>
                </section>
                <section className="trips">
                    <h2 className="visually-hidden">Trips List</h2>
                    <CardsList trips={trips} duration={duration} difficulty={difficulty} search={search}/>
                </section>
            </main>
        </>
    )
}
export default Main