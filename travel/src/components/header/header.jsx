import {AppRoute} from "../../enums/common";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <a href={AppRoute.ROOT} className="header__logo">Travel App</a>
            </div>
        </header>
    )
}

export default Header