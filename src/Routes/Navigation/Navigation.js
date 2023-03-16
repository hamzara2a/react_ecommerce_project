import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as BulbLogo } from "../../Assets/crown.svg";
import "./Navigation.scss";

const Navigation = () => {
    return (
        <Fragment>

            <div className="navigation" >
                <Link className="logo-container" to="/">
                    <BulbLogo className="logo" />
                </Link>

                <div className="nav-links-container">
                    <Link classname="nav-link" to="/shop">
                        Shop
                    </Link>
                </div>
            </div>
            <Outlet />

        </Fragment>
    )
}

export default Navigation;