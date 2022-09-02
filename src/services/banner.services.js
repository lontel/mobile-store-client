import axios from 'axios'

class BannerService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/banner`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    saveImages(pictures) {
        return this.api.post('/savePhotos', pictures)
    }

    getAllImages() {
        return this.api.get('/photosList')
    }

}

const bannerService = new BannerService()

export default bannerService