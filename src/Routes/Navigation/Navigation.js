import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import { UserContext } from "../../Contexts/User.contexts";
import { CartContext } from "../../Contexts/Cart-context";
import { signOutUser } from "../../Utils/Firebase/Firebase";
import CartIcon from "../../Components/Cart-icon/Cart-icon";
import CartDropdown from "../../Components/Cart-dropdown/Cart-dropdown";

import {
    NavigationContainer, 
    NavLinksContainer, 
    LogoContainer, 
    Navlink
} from "./Navigation.styles";

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    
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