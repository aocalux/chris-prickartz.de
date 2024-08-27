const readOnlyTextArea = document.getElementById('readOnlyTextArea');
const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', () => {
  const textToCopy = readOnlyTextArea.value;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert('PGP-Schlüssel kopiert!');
    })
    .catch((error) => {
      console.error('Fehler beim kopieren:', error);
    });
});


const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  const textToCopy = readOnlyTextArea.value;
  downloadPGPKey(textToCopy);
});


function downloadPGPKey(keyText) {
  const blob = new Blob([keyText], { type: 'application/pgp-keys' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'publickey_encrypted@chris-prickartz.de.asc';
  a.click();

  URL.revokeObjectURL(url);
}