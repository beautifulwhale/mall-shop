import axios from 'axios'

export function request(config) {
    const intetface = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 3000
    })
    intetface.interceptors.request.use(function (config) {
        return config
    },
        function (error) {
            return Promise.reject(error);
        })
    intetface.interceptors.response.use(
        function (response) {
            return response.data
        },
        function (error) {
            return Promise.reject(error)
        }
    )
    return intetface(config)
}