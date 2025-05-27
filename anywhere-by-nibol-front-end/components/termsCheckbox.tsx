// Questo componente gestisce la checkbox per accettare i termini e condizioni
import React from "react";
import styles from "./TermsCheckbox.module.css"; // Import del CSS Module

// Tipo dei props accettati dal componente
interface TermsCheckboxProps {
  accepted: boolean;     // Stato della checkbox (true o false)
  onChange: () => void;  // Funzione chiamata al click
}

// Componente riutilizzabile per accettare i termini e condizioni
const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ accepted, onChange }) => {
  return (
    // Contenitore con stile personalizzato
    <div className={styles.termsContainer}>
      {/* Input checkbox per accettare i termini */}
      <input
        type="checkbox"
        id="terms"                   // Collega l'etichetta con htmlFor
        checked={accepted}          // Stato dinamico: selezionato o no
        onChange={onChange}         // Funzione di cambio stato
        className={styles.checkbox} // Classe CSS custom
        role="checkbox"             // Ruolo ARIA esplicito per screen reader
        aria-checked={accepted}     // Stato attuale della checkbox (true/false)
        aria-required="true"        // Campo richiesto (per convalida e accessibilità)
      />

      {/* Etichetta collegata all'input con htmlFor */}
      <label htmlFor="terms">
        I agree to the{" "}
        <a
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"  //  Sicurezza: evita vulnerabilità in target="_blank"
          className={styles.termsLink}
        >
          Terms and Conditions
        </a>
      </label>
    </div>
  );
};

export default TermsCheckbox;
