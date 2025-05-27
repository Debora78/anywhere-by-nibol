// Importa libreriaaxios per fare richieste HTTP verso Laravel
import axios from 'axios'

// Crea un'istanza preconfigurata di axios per puntare sempre al backend
// ogni volta che scrivi api.post(...) → farà la richiesta a Laravel
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // URL base per tutte le API Laravel
  withCredentials: true, // Permette la gestione di cookie/sessione (utile per Sanctum)
})

/**
 * Invia una richiesta di registrazione dell'utente al backend
 * @param name - nome utente
 * @param email - email utente
 * @param password - password
 */
//Laravel riceve i dati e crea un nuovo utente nel database
export const registerUser = async (name: string, email: string, password: string) => {
  const response = await api.post('/register', {
    name,
    email,
    password,
  })
  return response.data // Ritorna la risposta dal backend
}

/**
 * Invia una richiesta di login al backend
 * @param email - email utente
 * @param password - password
 */
//Se l’utente esiste e la password è corretta, Laravel restituisce i dati utente
export const loginUser = async (email: string, password: string) => {
  const response = await api.post('/login', {
    email,
    password,
  })
  return response.data // Ritorna la risposta dal backend che puoi usare nel frontend
}
