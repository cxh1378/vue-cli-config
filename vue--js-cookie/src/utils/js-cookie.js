import Cookies from 'js-cookie'

export function getToken(tokenKey) {
  return Cookies.get(tokenKey)
}

export function setToken(tokenKey, val) {
  return Cookies.set(tokenKey, val)
}

export function removeToken(tokenKey) {
  return Cookies.remove(tokenKey, { path: '', domain: '.yourdomain.com' })
}