"use client";

// Import dei React hooks per gestire lo stato dei campi del form
import { useState } from "react";

// Import della funzione che invia i dati al backend per la registrazione
import { registerUser } from "../services/auth";

// Import del modulo CSS per applicare lo stile specifico della pagina signup
import styles from "./signup.module.css";

// Componente principale della pagina di registrazione
export default function SignupPage() {
  // Stato per ogni campo del form (nome, cognome, email, password)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false); // checkbox per i termini
  const [message, setMessage] = useState(""); // messaggio di feedback

  // Funzione eseguita al submit del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene il refresh automatico della pagina

    // Se non sono accettati i termini, mostra messaggio di errore
    if (!acceptedTerms) {
      setMessage("You must agree to the terms and conditions.");
      return;
    }

    try {
      // Esegue la registrazione chiamando il backend con nome completo, email e password
      const data = await registerUser(`${firstName} ${lastName}`, email, password);
      setMessage("Account created successfully!"); // Mostra messaggio positivo
      console.log(data); // Log della risposta per debug
    } catch (error: any) {
      setMessage("Signup failed. Please try again."); // Mostra errore se la chiamata fallisce
      console.error(error); // Log dell'errore
    }
  };

  return (
    // Contenitore principale centrato e con sfondo chiaro
    <main className={styles.signupWrapper}>
      {/* Card con sfondo bianco e bordi arrotondati */}
      <div className={styles.signupCard}>
        {/* Titolo della pagina */}
        <h2 className={styles.signupTitle}>Signup</h2>

        {/* Link per accedere se si ha già un account */}
        <p className={styles.loginText}>
          Already registered? <a href="/login">Login</a>
        </p>

        {/* Form di registrazione */}
        <form onSubmit={handleSubmit}>
          {/* Campo nome */}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.inputField}
          />

          {/* Campo cognome */}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.inputField}
          />

          {/* Campo email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
          />

          {/* Campo password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />

          {/* Checkbox per accettare i termini e condizioni */}
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            <label htmlFor="terms">
              Agree to our <a href="#">Terms and Conditions</a>
            </label>
          </div>

          {/* Bottone per inviare il form */}
          <button type="submit" className={styles.signupButton}>
            Create account
          </button>
        </form>

        {/* Mostra il messaggio di feedback se presente */}
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </main>
  );
}
