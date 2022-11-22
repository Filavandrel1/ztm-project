import { signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

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
      <button>
        Sign with email
      </button>
    </div>
  )
}

export default SignIn;