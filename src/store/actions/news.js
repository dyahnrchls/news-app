import axios from 'axios'
import env from '../../env/env'

export const getNews = () => {
    return{
        type: 'GET_NEWS',
        payload: axios.get(`${env.host}`)
    }
}