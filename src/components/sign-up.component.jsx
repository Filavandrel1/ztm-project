import { useState, useContext } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';
import { FormInput } from './form-input.component';
import '../styles/sign-up-form.styles.scss';
import {Button } from './button.component';

import { UserContext } from '../contexts/user.context';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = async event => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);

      createUserDocumentFromAuth(user, {displayName});
      setCurrentUser(user);
      resetFormFields();
    }
    catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      }else{
        console.log(error);
      }
    }
  }
  return (
    <div className="sign-up-container">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" name="displayName" id="displayName"  onChange={handleChange} value={displayName} />
        <FormInput label="Email" type="text" name="email" id="email"  onChange={handleChange} value={email} />
        <FormInput label="Password" type="password" name="password" id="password"  onChange={handleChange} value={password} />
        <FormInput label="Current Password" type="password" name="confirmPassword" id="confirmPassword"  onChange={handleChange} value={confirmPassword} />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}