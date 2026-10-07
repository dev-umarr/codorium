import { loginRequest } from '../features/auth/authAPI'

export async function loginUser(payload) {
  console.log('loginUser', payload)
  return loginRequest(payload)
}
