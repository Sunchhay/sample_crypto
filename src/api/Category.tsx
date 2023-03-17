import { api } from "../services/api/index.service"

export const getCategory = () => {
    const data = api.POST(`category`)
    console.log(data)
    return data
}