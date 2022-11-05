export function setItem(key, item) {
  localStorage.setItem(key, JSON.stringify(item))
}

export function getItem(key) {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}
