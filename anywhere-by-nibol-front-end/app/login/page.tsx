"use client";

// Import dei React hooks
import { useState } from "react";

// Import della funzione che invia la richiesta di login al backend
import { loginUser } from "../services/auth";

// Import dello store Zustand per salvare l'utente loggato
import { useUserStore } from '@/store/userStore';

// Import del modulo CSS per la pagina di login
import styles from "./login.module.css";

// Componente principale della pagina di login
export default function LoginPage() {
  // Stato per gestire i dati inseriti nel form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Funzione per salvare l'utente nello store Zustand
  const setUser = useUserStore((state) => state.setUser);

  // Gestione del submit del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene il refresh della pagina
    try {
      const data = await loginUser(email, password); // Chiamata API
      setUser({ name: data.user.name, email: data.user.email }); // Salva l'utente
      setMessage("Login riuscito!");
    } catch  {
      setMessage("Login fallito. Controlla email o password.");
    }
  };

  return (
    <main className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        {/* Titolo */}
        <h2 className={styles.loginTitle}>Login</h2>

        {/* Link di registrazione */}
        <p className={styles.signupText}>
          Don’t you have an account? <a href="/signup">Signup</a>
        </p>

        {/* Form di login */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />

          <button type="submit" className={styles.loginButton}>
            Continue
          </button>
        </form>

        {/* Link forgot password */}
        <p className={styles.forgotPassword}>Forgot password?</p>

        {/* Messaggio di feedback */}
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </main>
  );
}
