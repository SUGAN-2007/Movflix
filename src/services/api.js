const API = "e171b311f579a76ff983484cb47b90db"
const BASE = "https://www.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE} /movie/popular?api_key=${API}`)
    const data = await response.json()
    return data.results
}

export const searchmovies = async (query) => {
    const response = await fetch(`${BASE} /movie/popular?api_key=${API} & query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}