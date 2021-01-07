export const searchUser = (email) => {

    const users = JSON.parse(localStorage.getItem('users')) || []

    if(users.length === 0) return null

    return users.find(user => user.email === email)
}