import axios from 'axios'

const $axios = axios.create({
    timeout: 1200000
})

export const get = (url:string, params: object) =>
    new Promise((resolve, reject) => {
        $axios({
            method: 'GET',
            url,
            params
        })
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })

export const post = (url:string, params: object, headers: object) =>
    new Promise((resolve, reject) => {
        $axios({
            method: 'POST',
            url,
            data: params,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                ...headers
            }
        })
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })
$axios.interceptors.request.use((config) => {
    return config
})
$axios.interceptors.response.use(
    (res) => {

        return res.data
    },
    (error) => {
        console.log(error)
    }
)

export default $axios
