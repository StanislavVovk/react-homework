import Header from "../header/header";
import CardsList from "./components/cardsFormer";
import trips from "./constants";


const Main = () => {
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
                            <input name="search" type="search" placeholder="search by title"/>
                        </label>
                        <label className="select">
                            <span className="visually-hidden">Search by duration</span>
                            <select name="duration">
                                <option value="">duration</option>
                                <option value="0_x_5">&lt; 5 days</option>
                                <option value="5_x_10">&lt; 10 days</option>
                                <option value="10_x">&ge; 10 days</option>
                            </select>
                        </label>
                        <label className="select">
                            <span className="visually-hidden">Search by level</span>
                            <select name="level">
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
                    <CardsList trips={trips} />
                    {/*<ul className="trip-list">*/}
                    {/*    <li class="trip-card">*/}
                    {/*        <img src="../travel/src/assets/images/iceland.jpg" alt="trip image"/>*/}
                    {/*        <div class="trip-card__content">*/}
                    {/*            <div class="trip-info">*/}
                    {/*                <h3 class="trip-info__title">Iceland</h3>*/}
                    {/*                <div class="trip-info__content">*/}
                    {/*                    <span class="trip-info__duration"><strong>15</strong> days</span>*/}
                    {/*                    <span class="trip-info__level">easy</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div class="trip-price">*/}
                    {/*                <span>Price</span>*/}
                    {/*                <strong class="trip-price__value">7000 $</strong>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <a href="./trip.html" class="button">Discover a trip</a>*/}
                    {/*    </li>*/}
                    {/*    <li class="trip-card">*/}
                    {/*        <img src="../travel/src/assets/images/iceland.jpg" alt="trip image"/>*/}
                    {/*        <div class="trip-card__content">*/}
                    {/*            <div class="trip-info">*/}
                    {/*                <h3 class="trip-info__title">Iceland</h3>*/}
                    {/*                <div class="trip-info__content">*/}
                    {/*                    <span class="trip-info__duration"><strong>15</strong> days</span>*/}
                    {/*                    <span class="trip-info__level">easy</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div class="trip-price">*/}
                    {/*                <span>Price</span>*/}
                    {/*                <strong class="trip-price__value">7000 $</strong>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <a href="./trip.html" class="button">Discover a trip</a>*/}
                    {/*    </li>*/}
                    {/*    <li class="trip-card">*/}
                    {/*        <img src="../travel/src/assets/images/iceland.jpg" alt="trip image"/>*/}
                    {/*        <div class="trip-card__content">*/}
                    {/*            <div class="trip-info">*/}
                    {/*                <h3 class="trip-info__title">Iceland</h3>*/}
                    {/*                <div class="trip-info__content">*/}
                    {/*                    <span class="trip-info__duration"><strong>15</strong> days</span>*/}
                    {/*                    <span class="trip-info__level">easy</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div class="trip-price">*/}
                    {/*                <span>Price</span>*/}
                    {/*                <strong class="trip-price__value">7000 $</strong>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <a href="./trip.html" class="button">Discover a trip</a>*/}
                    {/*    </li>*/}
                    {/*    <li class="trip-card">*/}
                    {/*        <img src={"../travel/src/assets/images/iceland.jpg"} alt="trip image"/>*/}
                    {/*        <div class="trip-card__content">*/}
                    {/*            <div class="trip-info">*/}
                    {/*                <h3 class="trip-info__title">Iceland</h3>*/}
                    {/*                <div class="trip-info__content">*/}
                    {/*                    <span class="trip-info__duration"><strong>15</strong> days</span>*/}
                    {/*                    <span class="trip-info__level">easy</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div class="trip-price">*/}
                    {/*                <span>Price</span>*/}
                    {/*                <strong className="trip-price__value">7000 $</strong>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <a href={"./trip.html"} class="button">Discover a trip</a>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </section>
            </main>
        </>
    )
}
export default Main