import axios from 'axios';
const api = axios.create({
    baseURL: 'http://zlaja.live:3006',
});


export const getMovies = async ({ category, year, title } = {}) => {
    try {
        const { data } = await api.get(`/`, {
            params: {
                category, year, title
            }
        });
        return data;
    } catch (error) { }
}
export const getBookmarks = async (ids) => {
    try {
        const { data } = await api.post(`/`, {
            ids
        });
        return data;
    } catch (error) { }
}