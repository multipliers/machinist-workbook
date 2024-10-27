import clientPromise from '../../../../lib/mongodb';

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('uyarServicesDatenbank');

    const body = await request.json();

    const result = await db.collection('mitarbeiter').insertOne(body);

    return new Response(JSON.stringify({ message: 'Erfolgreich hinzugefügt' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Fehler beim Hinzufügen' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
