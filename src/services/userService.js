import { get } from './api'

export async function fetchCurrentUser() {
  return get('/users/me')
}
