// Funzione per valutare la forza di una password
export function getPasswordStrength(password: string): {
  score: number;   // Punteggio complessivo della password
  message: string; // Messaggio descrittivo della forza
  color: string;   // Colore associato alla forza
} {
  let score = 0;

  // Incrementa il punteggio se la password soddisfa determinati criteri
  if (password.length > 5) score += 1;              // Lunghezza minima
  if (password.length > 8) score += 1;              // Lunghezza consigliata
  if (/[A-Z]/.test(password)) score += 1;           // Presenza di lettere maiuscole
  if (/[0-9]/.test(password)) score += 1;           // Presenza di numeri
  if (/[^A-Za-z0-9]/.test(password)) score += 1;    // Presenza di caratteri speciali



  // Determina il messaggio e il colore in base al punteggio
  let message = '';
  let color = '';

  
  switch (score) {
    case 0:
    case 1:
      message = 'Too easy my friend';
      color = 'red';
      break;
    case 2:
    case 3:
      message = 'Could be better';
      color = 'orange';
      break;
    case 4:
      message = 'Almost strong';
      color = 'blue';
      break;
    case 5:
       message = 'Very strong!';
      color = 'green';
      break;
  }

  return { score, message, color };
}
