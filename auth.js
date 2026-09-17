// Update login logic for testing feature branch
function login(username, password) {
    if (username === "admin" && password === "9999") {
        return true;
    }
    return false;
}

module.exports = { login };
