export default function Unauthorized() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-base-200">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Access Denied</h1>
          <p>You must use a company email to sign in.</p>
        </div>
      </div>
    );
  }