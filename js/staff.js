// Staff specific functionality

document.addEventListener('DOMContentLoaded', function() {
  // Load staff-specific key history data
  loadStaffKeyHistoryData();
  
  // Set up event listeners for staff function cards
  setupStaffFunctionCards();
  
  // Load notification count
  loadNotificationCount();
});

// Load key history data for staff
function loadStaffKeyHistoryData() {
  // This is a simulation. In a real app, you would fetch this from an API
  console.log('Loading staff key history data...');
  
  // In a real app, you would have code like this:
  // fetch('/api/staff/keys/history')
  //   .then(response => response.json())
  //   .then(data => {
  //     populateStaffKeyHistoryTable(data);
  //   })
  //   .catch(error => console.error('Error loading key history:', error));
}

// Set up event listeners for staff function cards
function setupStaffFunctionCards() {
  const cards = document.querySelectorAll('.function-card');
  
  cards.forEach(card => {
    const button = card.querySelector('button');
    const cardTitle = card.querySelector('h3').textContent.trim();
    
    if (button) {
      button.addEventListener('click', () => handleStaffCardClick(cardTitle));
    }
  });
}

// Handle clicks on staff function cards
function handleStaffCardClick(cardTitle) {
  console.log(`Clicked on ${cardTitle} card`);
  
  switch (cardTitle) {
    case 'Key View':
      alert('Key View functionality would open here');
      // In a real app: window.location.href = 'key-view.html';
      break;
      
    case 'Assignment':
      window.location.href = 'assignment-details.html';
      break;
      
    default:
      console.log('Unknown card clicked');
  }
}

// Load notification count for assignment card
function loadNotificationCount() {
  // In a real app, this would be fetched from an API
  const notificationCount = 3;
  
  // Update notification badge if it exists
  const badge = document.querySelector('.notification-badge');
  if (badge) {
    badge.textContent = notificationCount;
    
    // Hide badge if count is 0
    if (notificationCount === 0) {
      badge.style.display = 'none';
    }
  }
}