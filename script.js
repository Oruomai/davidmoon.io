const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  if (entry.isIntersecting) {
  if (entry.target.classList.contains('hidden')) {
  entry.target.classList.add('show');
  entry.target.addEventListener('transitionend', () => {
  entry.target.classList.remove('hidden');
  });
  }
  }
  });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el) => observer.observe(el));
  
  const sidebar = document.querySelector(".sidebar");
  
  window.addEventListener("scroll", () => {
  if (window.pageYOffset > 70) {
  sidebar.classList.add("visible");
  } else {
  sidebar.classList.remove("visible");
  }
});