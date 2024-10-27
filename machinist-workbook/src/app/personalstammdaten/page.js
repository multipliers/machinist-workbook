

import clientPromise from '../../../lib/mongodb';

export const metadata = {
  title: 'Personalstammdaten',
};

const PersonalstammdatenPage = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('uyarServicesDatenbank');

    const employees = await db.collection('mitarbeiter').find({}).toArray();

    return (
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Personalstammdaten</h1>
          <a
            href="/personalstammdaten/neuer-mitarbeiter"
            className="btn btn-primary"
          >
            Neuen Mitarbeiter anlegen
          </a>
        </div>
        {/* Tabelle */}
        <table className="table table-xs">
          <thead>
            <tr>
              <th className="px-4 py-2">Vorname</th>
              <th className="px-4 py-2">Nachname</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Personalnummer</th>
              <th className="px-4 py-2">Abteilung</th>
              {/* Weitere Spalten nach Bedarf */}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td className="border px-4 py-2">{employee.vorname}</td>
                <td className="border px-4 py-2">{employee.nachname}</td>
                <td className="border px-4 py-2">{employee.status}</td>
                <td className="border px-4 py-2">{employee.personalnummer}</td>
                <td className="border px-4 py-2">{employee.abteilung}</td>
                {/* Weitere Daten nach Bedarf */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } catch (e) {
    console.error(e);
    return <div>Fehler beim Laden der Daten.</div>;
  }
};

export default PersonalstammdatenPage;
