import React from "react";
import FormInput from "../Form-input/form-input.component";
import CustomButton from "../Custom-button/custom-button.component";
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import { getByTitle } from "@testing-library/react";

class SignUp extends React.Component {
 constructor() {
     super();
      
    this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassworf: ''
        }
    }

 handleSubmit = async event => {
     event.preventDefault();
     const {displayName, email, password, confirmPassword} = this.state;

     if(password !== confirmPassword) {
         alert("password don't match");
         return;
     }

     try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user, {displayName});
        this.state = ({
            displayName: '',
            email: '',
            password: '',
            confirmPassworf: ''
        });
     } catch(error) {
         console.error(error);
     }
 };
 
 handleChange = event => {
     const { name, value } = event.target;
     this.setState({[name]: value});
 }
 

 render() {
     const {displayName, email, password, confirmPassword} = this.state;
     return (
         <div className="sign-up">
             <h2 className="title">Don't Have Account</h2>
             <span>Sign Up With Your Email And Password</span>
             <form className="sign-up-form" onSubmit={this.handleSubmit}>
                 <formInput type='text' name='display' value={displayName}
                  onChange={this.handleChange} label={'Display Name'} required>
                 </formInput>

                 <formInput type='email' name='email' value={emailName}
                  onChange={this.handleChange} label={'Email'} required>
                 </formInput>

                 <formInput type='password' name='display' value={displayName}
                  onChange={this.handleChange} label={'Password'} required>
                 </formInput>

                 <formInput type='confirmPassword' name='confirmPassword' value={displayName}
                  onChange={this.handleChange} label={'Confirm Password'} required>
                 </formInput>
                 <CustomButton type='sumit'>SIGN UP</CustomButton>
             </form>
         </div>
     )
 } 
}

export default SignUp;