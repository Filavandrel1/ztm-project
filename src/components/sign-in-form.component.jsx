import '../styles/sign-in-form.styles.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'
import {Button} from './button.component'
import { FormInput } from './form-input.component';
import { useState } from 'react';
import { signInAccountWithEmailAndPassword } from '../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
}

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = async event => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const {user} = await signInAccountWithEmailAndPassword(email, password);  
      console.log(user);
      resetFormFields();
    }
    catch (error) {
      if(error.code === 'auth/invalid-email') {
        alert('Invalid email');
      }else if(error.code === 'auth/user-not-found') {
        alert('User not found');
      }else if(error.code === 'auth/wrong-password') {
        alert('Wrong password');
      }else{
        console.log(error);
      }
      switch (error.code) {
        case 'auth/invalid-email':
          alert('Invalid email');
          break
        case 'auth/user-not-found':
          alert('User not found');
          break
        case 'auth/wrong-password':
          alert('Wrong password');
          break
        default:
          console.log(error);
      }
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" type="text" name="email" onChange={handleChange} value={email} />
        <FormInput label="Password" type="password" name="password" onChange={handleChange} value={password} />
        <div className="buttons-container">
          <Button>
            Sign In
          </Button>
          <Button buttonType='google' onClick={logGoogleUser}>
          Google sign in
          </Button>
        </div>
      </form>
    </div>
  )
}
