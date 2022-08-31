import axios from 'axios'

class BannerService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/item`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    saveItem(itemData) {
        return this.api.post('/save', itemData)
    }

    getAllItems() {
        return this.api.get('/list')
    }


}

const bannerService = new BannerService()

export default bannerService