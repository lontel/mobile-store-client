import axios from 'axios'

class ItemService {

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

    getOneItem(item_id) {

        return this.api.get(`/details/${item_id}`)
    }

    editItem(item_id, itemData) {
        return this.api.put(`/update/${item_id}`, itemData)
    }

    deleteItem(item_id) {
        return this.api.delete(`/delete/${item_id}`)
    }

    filterItems(query) {
        return this.api.get(`/getFilteredItems?from_to=${query}`)
    }

}

const itemService = new ItemService()

export default itemService