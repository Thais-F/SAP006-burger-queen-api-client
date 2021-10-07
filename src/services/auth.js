export const isAuthenticated = () => {
    const token = localStorage.getItem("usersToken");
    console.log(token)
        if (token) {
            return true;
        } else {
            return false;
        }
}

// export const role = () => localStorage.getItem("role");

// export const token = () => localStorage.getItem("usersToken");
