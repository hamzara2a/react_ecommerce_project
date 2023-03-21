import { useState } from 'react';

import FormInput from '../Form-input/Form-input';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import { 
    signInWithGooglepopup, 
    signInAuthUserWithEmailAndPassword 
} from '../../Utils/Firebase/Firebase';

import { SignInContainer, ButtonsContainer } from './Sign-in.styles';

//---------------------------------------------------------------


const defaultformFields = {
    email: '',
    password: '',
} 

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultformFields)
    const { email, password } = formFields;


    //----------------------------------------

    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultformFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // "we don't want any default behavior. We will handle everything in the form ourselves"

        try {
            
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        } catch (error) {

            switch(error.code) {
                case "auth/wrong-password":
                    alert("The username and password do not match our records.")
                    break;
                case "auth/user-not-found":
                    alert("The username and password do not match our records.")
                    break;
                default:
                    console.log(error)
            }
        }
    }

    //database access functions should always be async
    //because we don't want our program to be blocked while searching the database
    const signInWithGoogle = async () => {
        await signInWithGooglepopup();
    }
    return (

        

        <SignInContainer>
            <h2>Already Have An Account?</h2>
            <span>Sign in With Your Email and password!</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label="Email" 
                    type="text" 
                    onChange={handleChange} 
                    required 
                    name='email' 
                    value={email}
                />

                <FormInput 
                    label="Password"
                    type="password" 
                    onChange={handleChange} 
                    required 
                    name='password' 
                    value={password}
                />

                <ButtonsContainer>
                    <Button type="submit">SIGN IN!</Button>

                    {/* by default, buttons will try to submit. 
                    To avoid this, change the type to 'button' for the Google button */}
                    <Button 
                        type='button' 
                        buttonType={BUTTON_TYPE_CLASSES.google} 
                        onClick={signInWithGoogle}>
                            GOOGLE SIGN IN!
                    </Button>
                </ButtonsContainer>
                
            </form>
        </SignInContainer>

    )
}

export default SignIn;