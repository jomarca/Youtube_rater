const TOKEN_KEY = 'user-token'

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  }
}

export {TokenService}