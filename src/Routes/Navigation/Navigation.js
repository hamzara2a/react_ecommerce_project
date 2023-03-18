import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import { UserContext } from "../../Contexts/User.contexts";
import { CartContext } from "../../Contexts/Cart-context";
import { signOutUser } from "../../Utils/Firebase/Firebase";
import CartIcon from "../../Components/Cart-icon/Cart-icon";
import CartDropdown from "../../Components/Cart-dropdown/Cart-dropdown";

import "./Navigation.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    
    //console.log(currentUser)
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? 
                        (
                         <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        )
                        :
                        (
                        <Link className='nav-link' to='/auth'>
                        SIGN IN
                        </Link>
                        )}
                    <CartIcon />
                </div>   
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Navigation;