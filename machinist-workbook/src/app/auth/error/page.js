//Falls Sie Benutzer, die keine Firmen-E-Mail-Adresse verwenden, auf eine Fehlerseite leiten möchten.

// app/auth/error/page.js
export default function ErrorPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-center">Anmeldung fehlgeschlagen</h2>
          <p className="text-center">
            Sie müssen eine gültige Firmen-E-Mail-Adresse verwenden, um sich anzumelden.
          </p>
        </div>
      </div>
    );
  }
  