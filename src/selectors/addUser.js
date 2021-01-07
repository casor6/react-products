export const addUser = (user) => {

    const users = JSON.parse(localStorage.getItem('users')) || []

    users.push(user)

    localStorage.setItem('users',JSON.stringify(users))
    setUser(user)
}

export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}