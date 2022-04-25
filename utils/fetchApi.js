import axios from 'axios';

export const baseUrl ='https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'd883ba9304msh96990273d6c5227p1c33e4jsn975931d62088'
        }
    });

    return data;
}