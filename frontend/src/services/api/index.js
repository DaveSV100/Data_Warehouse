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
    },
    countries: {
        getCountries: `${API}countries`,
        postCountries: `${API}countries`,
        putCountries: `${API}countries`,
        deleteCountry: (id) => `${API}countries/${id}`
    },
    cities: {
        getCities: `${API}cities`,
        postCities: `${API}cities`,
        putCities: `${API}cities`,
        deleteCity: (id) => `${API}cities/${id}`
    }
}

export default endPoints;