import { loginRequest } from '../features/auth/authAPI'

export async function loginUser(payload) {
  return loginRequest(payload)
}
