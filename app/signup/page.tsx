'use client' // Indica che questo componente gira lato client (browser), non lato server

// Componente della pagina di registrazione
export default function SignupPage() {
  return (
    // Contenitore principale con Bootstrap, centrato verticalmente e orizzontalmente
    <main className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      {/* Box di larghezza massima 400px */}
      <div className="w-100" style={{ maxWidth: '400px' }}>
        {/* Titolo della pagina */}
        <h1 className="mb-4 text-center">Registrati</h1>

        {/* Form con campi: nome, email, password */}
        <form>
          {/* Campo nome */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input type="text" className="form-control" id="name" placeholder="Inserisci il tuo nome" />
          </div>

          {/* Campo email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Inserisci la tua email" />
          </div>

          {/* Campo password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Crea una password" />
          </div>

          {/* Pulsante di invio */}
          <button type="submit" className="btn btn-success w-100">Registrati</button>
        </form>

        {/* Link per tornare alla pagina di login */}
        <p className="mt-3 text-center">
          Hai già un account? <a href="/login">Accedi</a>
        </p>
      </div>
    </main>
  )
}
