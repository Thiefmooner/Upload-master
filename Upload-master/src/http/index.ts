import axios from 'axios'
import { ref } from 'vue'

const json = ref("/json")
const http = ref("http://192.168.1.101")

// const http = ref("/api") 
//If the front-end is configured with cross domain, this is the case


export const getFlowers = (parms: {}) => {
    return axios.post(http.value + '/HIV/Article/UploadVideo', parms)
}