import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://www.nbrb.by/api/exrates/currencies', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async getById(id) {
        const response = await axios.get(`https://www.nbrb.by/api/exrates/currencies/${id}`)
        return response;
    }

 
    static async getExchange(){
        const response = await axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
        return response;
    }
}
