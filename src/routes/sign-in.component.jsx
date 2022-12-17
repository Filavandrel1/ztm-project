import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'
import SignUpForm from '../components/sign-up.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  } 
  
  return (
    <div>
      <p>Sign in page</p>
      <button onClick={logGoogleUser}>
        Sign in to Google popup
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn;