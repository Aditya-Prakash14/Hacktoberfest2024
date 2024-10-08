document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute('href'));
    });
  });

  // Responsive navigation menu
  const nav = document.querySelector('nav');
  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = '☰';
  nav.parentNode.insertBefore(hamburger, nav);

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Animate boxes on scroll
  const boxes = document.querySelectorAll('#boxes .box');
  const animateBoxes = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.style.opacity = '1';
        box.style.transform = 'translateY(0)';
      } else {
        box.style.opacity = '0';
        box.style.transform = 'translateY(50px)';
      }
    });
  };

  window.addEventListener('scroll', animateBoxes);

  // Countdown timer to Hacktoberfest 2024
  const countdownElement = document.getElementById('countdown');
  const hacktoberfestDate = new Date('October 1, 2024 00:00:00').getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = hacktoberfestDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(countdownTimer);
      countdownElement.innerHTML = "Hacktoberfest 2024 has begun!";
    }
  };

  const countdownTimer = setInterval(updateCountdown, 1000);

  // Newsletter form submission with animation
  const form = document.querySelector('form');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    submitButton.innerHTML = 'Subscribing...';
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(() => {
      submitButton.innerHTML = 'Subscribed!';
      submitButton.style.backgroundColor = '#4CAF50';
      
      setTimeout(() => {
        submitButton.innerHTML = 'Subscribe';
        submitButton.disabled = false;
        submitButton.style.backgroundColor = '';
        form.reset();
      }, 2000);
    }, 1500);
  });

  // Parallax effect for showcase background
  const showcase = document.getElementById('showcase');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    showcase.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });

  // Initialize animations
  animateBoxes();
});
