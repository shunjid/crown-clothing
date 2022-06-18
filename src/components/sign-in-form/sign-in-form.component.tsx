import { useState } from 'react'
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from '../../utils/firebase/firebase.utils'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { SignInFormContainer } from './sign-in-form.styles'

const SignInForm = () => {
  const defaultFormField = {
    email: '',
    password: '',
  }

  const [formFields, setFormFields] = useState(defaultFormField)
  const { email, password } = formFields

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(defaultFormField)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        alert('Incorrect password or email')
      } else if (error.code === 'auth/user-not-found') {
        alert('User not found')
      } else {
        console.log('Encountered an error while signing in the user')
      }
    }

    resetFormFields()
  }

  const logGoogleUser = async () => {
    await signInWithGooglePopUp()
  }

  return (
    <SignInFormContainer>
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          changeHandler={handleChange}
          label="Email"
          type="email"
          required
          name="email"
          value={email}
        />

        <FormInput
          changeHandler={handleChange}
          label="Password"
          type="password"
          required
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            clickHandler={logGoogleUser}
            dimension={BUTTON_TYPE_CLASSES.google}
          >
            Sign In with Google
          </Button>
        </div>
      </form>
    </SignInFormContainer>
  )
}

export default SignInForm
