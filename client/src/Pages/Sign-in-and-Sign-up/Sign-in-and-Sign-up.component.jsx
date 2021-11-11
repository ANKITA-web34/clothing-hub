import React from "react";
import SignIn from "../../Components/Sign-in/sign-in.component";
import SignUp from "../../Components/Sign-up/sign-up.component";
import './Sign-in-and-Sign-up.styles.scss';



const SignINAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp/>
    </div>
);

export default SignINAndSignUpPage;