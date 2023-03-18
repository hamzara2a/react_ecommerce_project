import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import { UserContext } from "../../Contexts/User.contexts";
import { signOutUser } from "../../Utils/Firebase/Firebase";

import "./Navigation.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    
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
                        )
                    }
                    
                </div>   
            </div>
            <Outlet />
        </Fragment>
    )
}


export default Navigation;