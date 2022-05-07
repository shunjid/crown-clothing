import { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Password do not match')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, {
        displayName,
      })
      resetFormFields()
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email is already in use')
      } else {
        console.log('Encountered an error while creating the user')
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
