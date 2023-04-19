class DataCache {
  setCache(key, value, isLocal) {
    if (isLocal) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    }
  }
  getCache(key, isLocal) {
    let value
    if (isLocal) {
      value = window.localStorage.getItem(key)
    } else {
      value = window.sessionStorage.getItem(key)
    }
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key, isLocal) {
    if (isLocal) {
      window.localStorage.removeItem(key)
    } else {
      window.sessionStorage.removeItem(key)
    }
  }
  clearCache(isLocal) {
    if (isLocal) {
      window.localStorage.clear()
    } else {
      window.sessionStorage.clear()
    }
  }
}
export default new DataCache()
