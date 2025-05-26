import React from "react";
// Import dei classi CSS dal modulo per utilizzo con className
import styles from "./PasswordStrengthBar.module.css";

// Definizione tipo props ricevuti dal componente
interface PasswordStrengthBarProps {
  score: number;    // punteggio forza password (es. da 0 a 4)
  message: string;  // messaggio descrittivo della forza (es. "Debole")
  color: string;    // colore della barra e testo in base alla forza
}

// Componente funzione con destructuring delle props
const PasswordStrengthBar: React.FC<PasswordStrengthBarProps> = ({ score, message, color }) => {
  return (
    // Contenitore principale con margine superiore
    <div className={styles.container}>
      {/* Sfondo barra: grigio chiaro, arrotondato */}
      <div className={styles.barBackground}>
        {/* Barra colorata con larghezza e colore dinamici */}
        <div
          className={styles.barFill}
          style={{
            width: `${(score / 4) * 100}%`, // Calcolo % larghezza (da 0% a 100%)
            backgroundColor: color,         // Colore dinamico in base al punteggio
          }}
          role="progressbar"               // Accessibilità: indica barra di progresso
          aria-label="Password strength"   // Etichetta per screen reader
          aria-valuenow={score}            // Valore attuale (score)
          aria-valuemin={0}                // Valore minimo possibile
          aria-valuemax={4}                // Valore massimo possibile
        />
      </div>

      {/* Messaggio descrittivo sotto la barra, colore dinamico */}
      <p className={styles.message} style={{ color }}>
        {message}
      </p>
    </div>
  );
};

export default PasswordStrengthBar;
