"use client";

// Import dei React hooks per gestire lo stato dei campi del form
import { useState } from "react";

// Funzione di utilità che valuta la forza della password
import { getPasswordStrength } from "../../utils/passwordStrength";

// Import della funzione che invia i dati al backend per la registrazione
import { registerUser } from "../services/auth";

// Import del modulo CSS specifico per la pagina di signup
import styles from "./signup.module.css";

// Importa componenti riutilizzabili
// tasto termini e condizioni
import TermsCheckbox from "@/components/TermsCheckbox";
// barra di forza della password
import PasswordStrengthBar from "@/components/PasswordStrengthBar";


// Componente principale della pagina di registrazione
export default function SignupPage() {
  // Stato per ogni campo input del form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   // Stato per la checkbox dei termini
  const [acceptedTerms, setAcceptedTerms] = useState(false); 
  

  // Stato per la forza della password (score, messaggio e colore)
  const [passwordStrength, setPasswordStrength] = useState<{
    score: number;
    message: string;
    color: string;
  }>({
    score: 0,
    message: "",
    color: "",
  });

  // Stato per il messaggio di feedback
  const [message, setMessage] = useState(""); 

  // Funzione eseguita al submit del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene il refresh automatico della pagina

    // Verifica se l'utente ha accettato i termini altrimenti blocco l'invio
    if (!acceptedTerms) {
      setMessage("You must agree to the terms and conditions."); // Messaggio di errore
      return;// Blocca l’invio
    }

    try {
      // Invia i dati al backend
      const data = await registerUser(
        `${firstName} ${lastName}`,
        email,
        password
      );
      setMessage("Account created successfully!");
      console.log(data); // debug
    } catch (error: unknown) {
      setMessage("Signup failed. Please try again.");
      console.error(error); // debug errore
    }
  };

  return (
    <main className={styles.signupWrapper}>
      <div className={styles.signupCard}>
        <h2 className={styles.signupTitle}>Signup</h2>

        <p className={styles.loginText}>
          Already registered? <a href="/login">Login</a>
        </p>

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
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value); // Aggiorna la password
              setPasswordStrength(getPasswordStrength(value)); // Calcola la forza
            }}
            className={styles.inputField}
          />

          {/* Mostra la barra della forza della password solo se l'utente ha iniziato a scrivere */}
          {password && (
            <PasswordStrengthBar
              score={passwordStrength.score}
              message={passwordStrength.message}
              color={passwordStrength.color}
            />
          )}

          {/* Checkbox per accettare i termini e condizioni */}
          <TermsCheckbox
            accepted={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
          />


          {/* Il bottone rimane disattivato fino a quando l'utente accetta i termini */}
          <button type="submit" className={styles.signupButton} disabled={!acceptedTerms}> 
            Create account
          </button>
        </form>

          {/* Mostra messaggi di errore/successo */}
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </main>
  );
}
