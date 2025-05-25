'use client' // Questo componente viene eseguito lato client (browser)

// Componente per la pagina di login
export default function LoginPage() {
  return (
    // Contenitore principale centrato su schermo
    <main className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      {/* Contenitore del form con larghezza massima */}
      <div className="w-100" style={{ maxWidth: '400px' }}>
        {/* Titolo pagina */}
        <h1 className="mb-4 text-center">Accedi</h1>

        {/* Form di login */}
        <form>
          {/* Campo email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Inserisci la tua email" />
          </div>

          {/* Campo password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Inserisci la password" />
          </div>

          {/* Bottone per inviare il form */}
          <button type="submit" className="btn btn-primary w-100">Accedi</button>
        </form>

        {/* Link per andare alla registrazione */}
        <p className="mt-3 text-center">
          Non hai un account? <a href="/signup">Registrati</a>
        </p>
      </div>
    </main>
  )
}
