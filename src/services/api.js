import axios from 'axios';


//URL FILMES EM CARTAZ
//https://api.themoviedb.org/3/

// movie/now_playing?

// api_key=daa3a5538bbdb159a2794c2a27416bce &language=pt-BR &page=1


export const key = 'daa3a5538bbdb159a2794c2a27416bce'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;