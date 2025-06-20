// Dashboard functionality shared between supervisor and staff

// DOM Elements
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const logoutIcon = document.querySelector('.user-avatar');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const assignmentButtons = document.querySelectorAll('.assignment-btn');

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Set up tab switching
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', switchTab);
    });
  }
  
  // Set up logout functionality
  if (logoutIcon) {
    logoutIcon.addEventListener('click', handleLogout);
  }
  
  // Set up mobile menu toggle
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', toggleSidebar);
  }
  
  // Set up assignment button navigation
  if (assignmentButtons.length > 0) {
    assignmentButtons.forEach(button => {
      button.addEventListener('click', navigateToAssignment);
    });
  }
  
  // Load user info
  loadUserInfo();
});

// Switch between tabs
function switchTab(e) {
  const tabId = e.target.getAttribute('data-tab');
  
  // Update active tab button
  tabButtons.forEach(btn => {
    btn.classList.remove('active');
  });
  e.target.classList.add('active');
  
  // Show selected tab content
  tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.id === tabId) {
      content.classList.add('active');
    }
  });
}

// Handle logout
function handleLogout() {
  // Clear user data
  localStorage.removeItem('currentUser');
  
  // Redirect to login page
  window.location.href = 'index.html';
}

// Toggle sidebar on mobile
function toggleSidebar() {
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
}

// Navigate to assignment page
function navigateToAssignment() {
  window.location.href = 'assignment-details.html';
}

// Load user info from localStorage
function loadUserInfo() {
  const currentUser = localStorage.getItem('currentUser');
  
  if (currentUser) {
    const user = JSON.parse(currentUser);
    
    // Update user info in the header
    const userNameElement = document.getElementById('user-name');
    const userContactElement = document.getElementById('user-contact');
    
    if (userNameElement) {
      userNameElement.textContent = user.name;
    }
    
    if (userContactElement) {
      userContactElement.textContent = user.contact;
    }
  }
}