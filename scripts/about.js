const sidebar = document.querySelector('.side-bar');
      const hamburger = document.querySelector('.open-hamburger-icon');
      const closeIcon = document.querySelector('.close-hamburger-icon');

      sidebar.style.display ="none";

      hamburger.addEventListener('click', () => {
        if (sidebar.style.display === 'none') {
          sidebar.style.display = 'block';
          hamburger.style.display = 'none';
          closeIcon.style.display = 'block';
        } else {
          sidebar.style.display = 'none';
          hamburger.style.display = "block";
          closeIcon.style.display = "none";
        }
      });

      closeIcon.addEventListener ('click', () => {
        sidebar.style.display ='none';
        hamburger.style.display = 'block';
        closeIcon.style.display = 'none';
      });