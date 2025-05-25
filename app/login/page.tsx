"use client"; // Questo componente viene eseguito lato client (browser)
import { useUserStore } from '@/store/userStore'

import { useState } from "react"; // Per gestire gli input del form(serve per salvare e aggiornare i dati digitati dall’utente nel form )
import { loginUser } from "../services/auth"; // Importa la funzione che chiama il backend(manda i dati al backend via axios)

// Componente per la pagina di login
export default function LoginPage() {
  // Stato dei campi del form
  //Crea 3 “variabili” che si aggiornano automaticamente:
  //email: memorizza il testo inserito nel campo email
  const [email, setEmail] = useState(""); // Valore dell'email

  //password: memorizza la password inserita
  const [password, setPassword] = useState(""); // Valore della password

  //message: serve per mostrare feedback all’utente (login riuscito o errore)
  const [message, setMessage] = useState(""); // Messaggio di feedback per l'utente

  // Gestione del submit del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene il refresh della pagina
    try {
      const data = await loginUser(email, password); // Chiama il backend con axios
      setMessage("Login riuscito!"); // Mostra messaggio positivo
      console.log(data); // Mostra in console i dati restituiti
    } catch (error) {
      setMessage("Login fallito. Controlla email o password."); // Mostra errore
      console.error(error);
    }
  };

  return (
    <main className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h1 className="mb-4 text-center">Accedi</h1>

        {/* Form di login */}
        <form onSubmit={handleSubmit}>
          {/* Campo email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email} // Collega lo stato
              onChange={(e) => setEmail(e.target.value)} // setEmail Aggiorna il valore quando l'utente digita
              placeholder="Inserisci la tua email"
            />
          </div>

          {/* Campo password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Inserisci la password"
            />
          </div>

          {/* Bottone per inviare il form */}
          <button type="submit" className="btn btn-primary w-100">
            Accedi
          </button>
        </form>

        {/* Mostra il messaggio di feedback */}
        {/*Serve per dire all’utente se il login è andato bene o male.*/ }
        {message && <p className="mt-3 text-center">{message}</p>}

        {/* Link per registrarsi */}
        <p className="mt-3 text-center">
          Non hai un account? <a href="/signup">Registrati</a>
        </p>
      </div>
    </main>
  );
}
