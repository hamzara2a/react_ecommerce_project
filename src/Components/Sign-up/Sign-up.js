import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../Utils/Firebase/Firebase";
import FormInput from "../Form-input/Form-input";
import Button from "../Button/Button";
import { SignUpContainer } from "./Sign-up.styles";

const defaultformFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
} 


const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultformFields)
    const {displayName, email, password, confirmPassword } = formFields;

    
    const resetFormFields = () => {
        setFormFields(defaultformFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // "we don't want any default behavior. We will handle everything in the form ourselves"
    
        if(password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        } 
    
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
        } 

        catch(error) 

        {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user. This email is already in use!')
            } else {
                console.log('User creation encountered an error', error)
            }
        }
    
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <h2>Don't Have An Account?</h2>
            <span>Sign up With Your Email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label="Display Name" 
                    type="text" 
                    onChange={handleChange} 
                    required 
                    name='displayName' 
                    value={displayName}
                />

                <FormInput 
                    label="Email"
                    type="email" 
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

                <FormInput
                    label="Confirm Password"
                    type="password" 
                    onChange={handleChange} 
                    required 
                    name='confirmPassword' 
                    value={confirmPassword}
                />

                <Button type="submit">SIGN UP!</Button>
                
            </form>
        </SignUpContainer>
    )
}

export default SignUp;