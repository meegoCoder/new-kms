// Authentication related functionality

// Demo user credentials
const users = [
  {
    username: 'ameerul',
    password: 'ameerul123',
    role: 'supervisor',
    name: 'Ameerul Hakeem Azlee',
    contact: '+60 1234 5678 / megoazlee@gmail.com',
    initials: 'AH'
  },
  {
    username: 'fazura',
    password: 'fazura123',
    role: 'staff',
    name: 'Fazura Hashim',
    contact: '+60 1234 5678 / faz_hashim@gmail.com',
    initials: 'FH'
  }
];

// DOM Elements
const loginForm = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const roleSelect = document.getElementById('role');
const errorMessage = document.getElementById('error-message');

// Event Listeners
if (loginForm) {
  loginForm.addEventListener('click', handleLogin);
}

// Handle login form submission
function handleLogin(e) {
  e.preventDefault();
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const role = roleSelect.value;
  
  if (!username || !password) {
    showError('Please enter both username and password');
    return;
  }
  
  // Check if credentials match
  const user = users.find(user => user.username === username && user.password === password && user.role === role);
  
  if (user) {
    // Save user info to localStorage for persistence
    localStorage.setItem('currentUser', JSON.stringify({
      name: user.name,
      role: user.role,
      contact: user.contact,
      initials: user.initials
    }));
    
    // Redirect to appropriate dashboard
    if (user.role === 'supervisor') {
      window.location.href = 'svdashboard.html';
    } else {
      window.location.href = 'staffdashboard.html';
    }
  } else {
    showError('Invalid username, password, or role combination');
  }
}

// Display error message
function showError(message) {
  errorMessage.textContent = message;
  
  // Clear error after 3 seconds
  setTimeout(() => {
    errorMessage.textContent = '';
  }, 3000);
}

// Check if user is already logged in on page load
function checkAuthStatus() {
  const currentUser = localStorage.getItem('currentUser');
  
  if (currentUser) {
    const user = JSON.parse(currentUser);
    
    // Redirect if on login page but already authenticated
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
      if (user.role === 'supervisor') {
        window.location.href = 'svdashboard.html';
      } else {
        window.location.href = 'staffdashboard.html';
      }
    }
  } else {
    // Redirect to login if not authenticated but trying to access protected pages
    if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
      window.location.href = 'index.html';
    }
  }
}

// Run auth check on page load
document.addEventListener('DOMContentLoaded', checkAuthStatus);