import { api } from "../services/api/index.service"

export const getNews = (value: any) => {
    const data = api.POST(`news-by-category?page=${value.page ?? ''}`, { data: value.data })
    return data
}