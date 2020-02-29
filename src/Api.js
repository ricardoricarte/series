import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const loadGenres        = () => api.get('genres')
export const saveSerie         = (newSerie) => api.post('series', newSerie)
export const updateSerie       =  (serie) => api.put('series/' + serie.id, serie)
export const loadSeriesByGenre = (genre) => api.get('series?genre=' + genre)
export const loadSerieById     = (id) => api.get('series/' + id)
export const removeSerieById   = (id) => api.delete('series/' + id)

const apis = {
  loadGenres,
  saveSerie,
  updateSerie,
  loadSeriesByGenre,
  loadSerieById,
  removeSerieById
}

export default apis
