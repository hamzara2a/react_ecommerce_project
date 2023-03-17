import SignUp from "../../Components/Sign-up/Sign-up";
import SignIn from "../../Components/Sign-in/Sign-in.component";

import './Authentication.scss';

const Authentication = () => {

    
   

    return (
        <div className="authentication-container">
            <SignIn />
            <SignUp />
    
        </div>

    )
}

export default Authentication;