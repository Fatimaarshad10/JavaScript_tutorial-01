document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const signupButton = document.getElementById('signup-button');
  
    signupButton.addEventListener('click', function () {
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      // Check if the username and password are not empty
      if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
      }
  
      // Save the user data in local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
  
      // Redirect the user to the next page
      window.location.href = '../class 20/index.html';
    });
  });
  