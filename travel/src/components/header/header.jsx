// import PropTypes from 'prop-types';
import styles from '../../assets/styles/style.css'

function Header() {
    return (
        <header className="header" style={styles.header}>
            <div className="header__inner" style={styles.header__inner}>
                <a href="#" className="header__logo" style={styles.header__logo}>Travel App</a>
            </div>
        </header>
    )
}

// Header.propTypes = {}
export default Header