import './Header.css';
import Cart from './Cart';
import Navigation from './Navigation';

function Header () {
    return (
        <header>
            <Navigation />
            <h1>Madelane</h1>
            <Cart />
        </header>
    )
}

export default Header