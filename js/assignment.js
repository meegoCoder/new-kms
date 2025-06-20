// Assignment page functionality

document.addEventListener('DOMContentLoaded', function() {
  // Set up tab switching for assignment tabs
  setupAssignmentTabs();
  
  // Set up back button functionality
  setupBackButton();
  
  // Set up refresh button functionality
  setupRefreshButton();
  
  // Initialize with mock data
  loadAssignmentData();
});

// Set up tab switching for assignment page
function setupAssignmentTabs() {
  const tabButtons = document.querySelectorAll('.assignment-tab-btn');
  const tabContents = document.querySelectorAll('.assignment-tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Update active button
      tabButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Show selected tab content
      tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === tabId) {
          content.classList.add('active');
        }
      });
    });
  });
}

// Set up back button functionality
function setupBackButton() {
  const backButton = document.getElementById('back-btn');
  
  if (backButton) {
    backButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get user role from localStorage
      const currentUser = localStorage.getItem('currentUser');
      
      if (currentUser) {
        const user = JSON.parse(currentUser);
        
        // Redirect to appropriate dashboard
        if (user.role === 'supervisor') {
          window.location.href = 'supervisor-dashboard.html';
        } else {
          window.location.href = 'staff-dashboard.html';
        }
      } else {
        // Default to staff dashboard if role not found
        window.location.href = 'staff-dashboard.html';
      }
    });
  }
}

// Set up refresh button functionality
function setupRefreshButton() {
  const refreshButton = document.getElementById('refresh-btn');
  
  if (refreshButton) {
    refreshButton.addEventListener('click', function() {
      // Simulate refreshing data
      const button = this;
      
      // Disable button and show loading state
      button.disabled = true;
      button.textContent = 'Refreshing...';
      
      // Simulate API call with delay
      setTimeout(() => {
        loadAssignmentData();
        
        // Reset button
        button.disabled = false;
        button.textContent = 'Refresh';
        
        // Show success message
        alert('Assignments refreshed successfully');
      }, 1000);
    });
  }
}

// Load assignment data
function loadAssignmentData() {
  // This is a simulation. In a real app, you would fetch from an API
  console.log('Loading assignment data...');
  
  // Update notification count if it exists
  const badge = document.querySelector('.notification-badge');
  if (badge) {
    badge.textContent = '3';
  }
  
  // In a real app, you would have code like:
  // fetch('/api/assignments')
  //   .then(response => response.json())
  //   .then(data => {
  //     updateAssignmentList(data);
  //     updateNotificationCount(data.length);
  //   })
  //   .catch(error => console.error('Error loading assignments:', error));
}

// Update date filters
document.addEventListener('DOMContentLoaded', function() {
  const dateSelects = document.querySelectorAll('#date-select, #date-select-done');
  
  dateSelects.forEach(select => {
    if (select) {
      select.addEventListener('change', function() {
        console.log(`Date filter changed to: ${this.value}`);
        // In a real app, you would reload data based on this filter
      });
    }
  });
});