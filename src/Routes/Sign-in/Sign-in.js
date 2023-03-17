import { signInWithGooglepopup, createUserDocumentFromAuth } from "../../Utils/Firebase/Firebase";

const SignIn = () => {

    //database access functions should always be async
    //because we don't want our program to be blocked while searching the database

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglepopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign-in Page!</h1>
            <button onClick={logGoogleUser}>
                Sign in with google popup
            </button>
        </div>

    )
}

export default SignIn