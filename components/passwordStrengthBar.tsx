// Questo componente visualizza una barra colorata che indica la forza della password
import React from "react";

// Tipo dei props che il componente riceve
interface PasswordStrengthBarProps {
  score: number;
  message: string;
  color: string;
}

// Componente che riceve score, message e color e visualizza una barra
const PasswordStrengthBar: React.FC<PasswordStrengthBarProps> = ({ score, message, color }) => {
  return (
    <div style={{ marginTop: "8px" }}>
      {/* Contenitore della barra */}
      <div
        style={{
          height: "8px",
          width: "100%",
          backgroundColor: "#eee",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        {/* Barra colorata che si riempie in base al punteggio */}
        <div
          style={{
            height: "100%",
            width: `${(score / 4) * 100}%`, // da 0% a 100%
            backgroundColor: color, // colore dinamico
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Messaggio sotto la barra */}
      <p style={{ fontSize: "12px", color }}>{message}</p>
    </div>
  );
};

export default PasswordStrengthBar;
