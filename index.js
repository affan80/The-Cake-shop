function navigateToPage() {
            window.location.href = "index2.html";
        }

const button = document.getElementById('animatedButton');
        button.addEventListener('click', () => {
          button.style.animation = 'bounce 0.5s';
    
          button.addEventListener('animationend', () => {
            button.style.animation = '';
          });
        });