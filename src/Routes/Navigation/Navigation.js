import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import { signOutUser } from "../../Utils/Firebase/Firebase";
import { selectCurrentUser } from "../../Store/User/User.selector";
import CartIcon from "../../Components/Cart-icon/Cart-icon";
import CartDropdown from "../../Components/Cart-dropdown/Cart-dropdown";
import { selectIsCartOpen } from "../../Store/Cart/Cart.selector";

import {
    NavigationContainer, 
    NavLinksContainer, 
    LogoContainer, 
    Navlink
} from "./Navigation.styles";

const Navigation = () => {
    const isCartOpen = useSelector(selectIsCartOpen)
    const currentUser = useSelector(selectCurrentUser)
    
    //console.log(currentUser)
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <Navlink to='/shop'>
                        SHOP
                    </Navlink>
                    {currentUser ? 
                        (
                         <Navlink as='span' onClick={signOutUser}>SIGN OUT</Navlink>
                        )
                        :
                        (
                        <Navlink to='/auth'>
                        SIGN IN
                        </Navlink>
                        )}
                    <CartIcon />
                </NavLinksContainer>   
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}


export default Navigation;