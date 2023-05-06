document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formMessage = document.querySelector('.form-message');
    formMessage.style.display = 'block';
  });