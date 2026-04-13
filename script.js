const button = document.getElementById('ping');
const status = document.getElementById('status');

button?.addEventListener('click', () => {
  const timestamp = new Date().toLocaleString();
  status.textContent = `JavaScript is working. ${timestamp}`;
});
