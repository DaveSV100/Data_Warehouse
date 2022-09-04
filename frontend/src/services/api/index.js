const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
    auth: {
        login: `${API}login`,
    },
    users: {
        getUsers: `${API}users`,
        postUsers: `${API}users`,
        deleteUsers: (id) => `${API}users/${id}`
    },
    regions: {
        getRegions: `${API}regions`,
        postRegions: `${API}regions`,
        putRegions: `${API}regions`,
        deleteRegion: (id) => `${API}regions/${id}`

    }
}

export default endPoints;