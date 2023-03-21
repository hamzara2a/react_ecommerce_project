import SignUp from "../../Components/Sign-up/Sign-up";
import SignIn from "../../Components/Sign-in/Sign-in.component";
import { AuthenticationContainer } from "./Authentication.styles";

const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignIn />
            <SignUp />
    
        </AuthenticationContainer>

    )
}

export default Authentication;