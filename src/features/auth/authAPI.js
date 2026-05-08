import { post } from '../../services/api'

export async function loginRequest(payload) {
  return post('/auth/login', payload)
}
