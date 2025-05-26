// Questo componente gestisce la checkbox per accettare i termini e condizioni
import React from "react";
import styles from "./TermsCheckbox.module.css"; // ✅ Import del CSS Module

// Tipo dei props
interface TermsCheckboxProps {
  accepted: boolean;
  onChange: () => void;
}

// Componente riutilizzabile per la checkbox dei termini
const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ accepted, onChange }) => {
  return (
    <div className={styles.termsContainer}>
      {/* Checkbox di accettazione */}
      <input
        type="checkbox"
        id="terms"
        checked={accepted}
        onChange={onChange}
        className={styles.checkbox}
      />
      {/* Etichetta con link */}
      <label htmlFor="terms">
        I agree to the{" "}
        <a href="/terms" target="_blank" className={styles.termsLink}>
          Terms and Conditions
        </a>
      </label>
    </div>
  );
};

export default TermsCheckbox;
