document.addEventListener("DOMContentLoaded", function() {
    const spinner = document.querySelector('.spinner');
    const heroContent = document.querySelector('.hero-content');
    
    setTimeout(function() {
      spinner.classList.add('hidden');
    }, 2000); 
  });
  