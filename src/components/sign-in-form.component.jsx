import '../styles/sign-in-form.styles.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'
import {Button} from './button.component'
import { FormInput } from './form-input.component';
import { useState, useContext } from 'react';
import { signInAccountWithEmailAndPassword } from '../utils/firebase/firebase.utils';
import { UserContext } from '../contexts/user.context';

const defaultFormFields = {
  email: '',
  password: '',
}

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const {setCurrentUser} = useContext(UserContext);

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    setCurrentUser(user);
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
      setCurrentUser(user);
      resetFormFields();
    }
    catch (error) {
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
