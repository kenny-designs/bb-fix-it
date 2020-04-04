const fixItBtn = document.getElementById('fix-it-btn'),
      fixText  = document.getElementById('fix-text');

fixItBtn.addEventListener('click', () => {
  copyText();
});

async function copyText() {
  try {
    let text = await navigator.clipboard.readText();
    await navigator.clipboard.writeText(
      text.replace(/white-space: pre;/g, 'white-space: normal;')
    );
    fixText.innerHTML = 'Done!';
  }
  catch (err) {
    console.error('Unable to read/write to text from clipboard: ', err);
  }
}
