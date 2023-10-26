
export const INDEV = process.env.NODE_ENV === 'development'
// const apiurl = INDEV
//   ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:32500/'
//   : 'https://api.premarketcap.io'

export const apiurl = 'http://localhost:32500/'

export const api = {
  get: async (endpoint, data) => {
    const request = await fetch(apiurl + endpoint, {
      method: 'GET',
      body: data,
      headers: {
        credentials: getCookie('pmc::credentials', { path: '/' })
      }
    })

    // if (request.status === 200) {
    //   return request.json()
    // }

    throw request
  },
  post: async (endpoint, data) => {
    const request = await fetch(apiurl + endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      
    })

    if ([200, 201].indexOf(request.status) !== -1) {
      return request.json()
    }

    throw request
  },
  postFile: async (endpoint, data) => {
    const request = await fetch(apiurl + endpoint, {
      method: 'POST',
      body: data,
      
    })
    if ([200, 201].indexOf(request.status) !== -1) {
      try {
        return await request.json()
      } catch (e) {
        return request
      }
    }
  },
  buffer: async (endpoint) => {
    const request = await fetch(apiurl + endpoint, {
      method: 'GET',
      
    })

    if (request.status === 200) {
      return request.arrayBuffer()
    }

    throw new Error('Failed to fetch buffer')
  }
}

export const clients = {
  api
}

export default clients
