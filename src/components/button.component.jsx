import '../styles/button.styles.scss';

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

export const Button = ({buttonType="" ,children, ...otherProps}) => {
  return(
    <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps} >
      {children}
    </button>
  )
}