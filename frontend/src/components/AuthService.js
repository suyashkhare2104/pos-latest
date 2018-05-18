import decode from 'jwt-decode';
export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000' // API server domain
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }

    login(username, password) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/auth-jwt/`, {
            method: 'POST',
            header: 'content-type: application/json',
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            this.setToken(res.token) // Setting the token in localStorage
            return Promise.resolve(res);
            console.log(res.token);
        })
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }
  }
