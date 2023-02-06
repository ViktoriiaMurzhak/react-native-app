import db from '../../firebase/config'
import { authSlice } from './authReducer'

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await db
        .auth()
        .createUserWithEmailAndPassword(email, password)
      dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }))
      console.log('user', user)
    } catch (err) {
      console.log('err', err.message)
    }
  }

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db.auth().signInWithEmailAndPassword(email, password)
      console.log('user', user)
    } catch (err) {
      console.log('err', err.message)
    }
  }

export const authSignOutUser = () => async (dispatch, getState) => {
  try {
  } catch (err) {
    console.log('err', err.message)
  }
}
