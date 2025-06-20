document.getElementById('guestForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Guest registered successfully!');
});
function goHome() {
  window.location.href = 'index.html';
}