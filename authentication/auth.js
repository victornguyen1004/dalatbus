let tokenKey = "hihi"

function setToken(value) {
    localStorage.setItem(tokenKey, value);
}

export {
    setToken
}