const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
    auth: {
        login: `${API}login`,
    },
    users: {
        getUsers: `${API}users`,
        postUsers: `${API}users`
    }
}

export default endPoints;