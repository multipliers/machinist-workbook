//Testseite, um zu prüfen, ob der redirect nach dem login funktioniert!

'use client';

export default function Button() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <button onClick={handleClick}>
      Sie sind erfolgreich eingeloggt!
    </button>
  );
}
