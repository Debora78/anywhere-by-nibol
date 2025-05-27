// utils/passwordStrength.ts

export function getPasswordStrength(password: string): {
  score: number;
  message: string;
  color: string;
} {
  let score = 0;

  if (password.length >= 6) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  let message = "";
  let color = "";

  switch (score) {
    case 0:
      message = "Too easy";
      color = "rgb(230, 57, 70)"; // rosso
      break;
    case 1:
      message = "Weak";
      color = "rgb(255, 127, 14)"; // arancione
      break;
    case 2:
      message = "Could be better";
      color = "rgb(244, 162, 97)"; // arancione chiaro
      break;
    case 3:
      message = "Good";
      color = "rgb(42, 157, 143)"; // verde acqua
      break;
    case 4:
      message = "Strong";
      color = "rgb(46, 204, 113)"; // verde
      break;
  }
  return { score, message, color };
}
