import { store } from 'store'

export default async (...p) => {
  const args = p[1] || {}

  args.headers = args.headers || {}

  const user = ''

  const bearer = user ? user.access_token : null

  args.headers.Authorization = bearer && `Bearer ${bearer}`

  p[1] = args

  if (args.nojson === true) return window.fetch(...p)

  else {
    var result = await window.fetch(...p)

    if (result.status === 204) return {}

    return result.json()
  }
}
