import './Navigation.css';
import {useState} from 'react';
import MenuSVG from './icons/MenuSVG';
import CloseSVG from './icons/CloseSVG';
import CaretSVG from './icons/CaretSVG';

const menuItems = [
    "New Arrivals",
    "Best-Sellers",
    "Tops",
    "Sweaters",
    "Denim"
]

function Navigation () {
    const [open, setOpen] = useState(false)

    function toggleOpen (e) {
        e.preventDefault();
        setOpen(!open)
    }

    return (
        <div>
            {open && (<div className="nav-backdrop" onClick={toggleOpen}></div>)}
            <button className="open-nav" onClick={toggleOpen} title="Open Menu">
                <MenuSVG />
            </button>
            <div className={"navigation" + (open ? " open" : "")}>
                <button className="close-nav" onClick={toggleOpen} title="Close">
                    <CloseSVG />
                </button>
                <nav className="nav-body">
                    <ul>
                        {menuItems.map(item => (
                            <li key={item}>
                                <button>
                                    <div>{item}</div>
                                    <div><CaretSVG /></div>
                                </button>
                            </li>
                        ))}
                        <li>
                            <button>
                                <div className="sale">Sale</div>
                                <div><CaretSVG /></div>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="account-section">
                    <hr />
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation