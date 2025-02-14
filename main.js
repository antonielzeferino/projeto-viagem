window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 230) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.querySelectorAll('.faq-item').forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.closest('.faq-item');
    faqItem.classList.toggle('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
