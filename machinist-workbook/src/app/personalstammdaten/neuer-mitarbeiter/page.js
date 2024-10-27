'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const NeuerMitarbeiterPage = () => {
  const [formData, setFormData] = useState({
    personalnummer: '',
    vorname: '',
    nachname: '',
    abteilung: '',
    status: '',
    // Weitere Felder nach Bedarf
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/mitarbeiter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/personalstammdaten');
      } else {
        console.error('Fehler beim Hinzufügen des Mitarbeiters');
      }
    } catch (error) {
      console.error('Fehler:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Neuen Mitarbeiter anlegen</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Personalnummer</label>
          <input
            type="text"
            name="personalnummer"
            value={formData.personalnummer}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        {/* Weitere Formularfelder */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Vorname</label>
          <input
            type="text"
            name="vorname"
            value={formData.vorname}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nachname</label>
          <input
            type="text"
            name="nachname"
            value={formData.nachname}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Abteilung</label>
          <input
            type="text"
            name="abteilung"
            value={formData.abteilung}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
           >
            <option value="" disabled>
            Bitte Status wählen
            </option>
            <option value="aktiv">Aktiv</option>
            <option value="inaktiv">Inaktiv</option>
          </select>
        </div>
        {/* Weitere Felder nach Bedarf */}
        <button type="submit" className="btn btn-primary">
          Mitarbeiter hinzufügen
        </button>
      </form>
    </div>
  );
};

export default NeuerMitarbeiterPage;
