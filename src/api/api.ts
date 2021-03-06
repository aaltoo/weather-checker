import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
})

export const weatherAPI = {
    getCity: (city : string) => {
        return instance.get(`?q=${city}&units=metric&appid=4cb227e028a1bd4aed635ca5f6820041`)
            .then(response => {
                return response.data
            })
    }
}
