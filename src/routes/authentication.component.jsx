import { SignUpForm } from '../components/sign-up.component';
import { SignInForm } from '../components/sign-in-form.component';
import '../styles/authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='sign-inup-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;