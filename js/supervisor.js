// Supervisor specific functionality

// Handle supervisor-specific functions

document.addEventListener('DOMContentLoaded', function() {
  // Load key history data
  loadKeyHistoryData();
  
  // Set up event listeners for function cards
  setupFunctionCards();
});

// Load key history data (would be from API in real application)
function loadKeyHistoryData() {
  // This is a simulation. In a real app, you would fetch this from an API
  console.log('Loading supervisor key history data...');
  
  // In a real app, you would have code like this:
  // fetch('/api/keys/history')
  //   .then(response => response.json())
  //   .then(data => {
  //     populateKeyHistoryTable(data);
  //   })
  //   .catch(error => console.error('Error loading key history:', error));
}

// Set up event listeners for supervisor function cards
function setupFunctionCards() {
  const cards = document.querySelectorAll('.function-card');
  
  cards.forEach(card => {
    const button = card.querySelector('button');
    const cardTitle = card.querySelector('h3').textContent.trim();
    
    if (button) {
      button.addEventListener('click', () => handleCardClick(cardTitle));
    }
  });
}

// Handle clicks on function cards
function handleCardClick(cardTitle) {
  console.log(`Clicked on ${cardTitle} card`);
  
  switch (cardTitle) {
    case 'Register Guest':
      alert('Register Guest functionality would open here');
      // In a real app: window.location.href = 'register-guest.html';
      break;
      
    case 'Key Management':
      alert('Key Management functionality would open here');
      // In a real app: window.location.href = 'key-management.html';
      break;
      
    case 'Assignment':
      window.location.href = 'assignment-details.html';
      break;
      
    case 'Inspection':
      alert('Inspection functionality would open here');
      // In a real app: window.location.href = 'inspection.html';
      break;
      
    case 'Maintenance':
      alert('Maintenance functionality would open here');
      // In a real app: window.location.href = 'maintenance.html';
      break;
      
    case 'Report':
      alert('Report functionality would open here');
      // In a real app: window.location.href = 'reports.html';
      break;
      
    case 'Account Management':
      alert('Account Management functionality would open here');
      // In a real app: window.location.href = 'account-management.html';
      break;
      
    default:
      console.log('Unknown card clicked');
  }
}