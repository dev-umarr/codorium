import { get } from '../../services/api'

export async function fetchDashboardSummary() {
  return get('/dashboard/summary')
}
