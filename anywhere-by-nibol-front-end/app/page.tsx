// app/page.tsx

// Indica che questo è un componente lato client (necessario per usare useRouter e useEffect)
'use client';

// Importa il React Hook 'useEffect' per eseguire codice quando il componente è montato
import { useEffect } from 'react';

// Importa il router di Next.js per navigare programmaticamente tra le pagine
import { useRouter } from 'next/navigation';

// Componente principale che gestisce il redirect
export default function HomeRedirect() {
  // Ottiene l'istanza del router
  const router = useRouter();

  // useEffect viene eseguito dopo che il componente è stato montato
  useEffect(() => {
    // Esegue il redirect alla pagina di login
    router.push('/login');
  }, [router]); // Dipendenza: il redirect si esegue solo una volta quando il router è disponibile

  // Non viene visualizzato nulla nella pagina (ritorna null)
  return null;
}
