const revealTargets = document.querySelectorAll('section h2, .question-list, .reality-document, .reality-offtime, .reality-pressure, .reality-conclusion, .journey, .photo-editorial, .bad-list, .keep-words, .relationship, .case-path, .case-outcome, .story-track, .founder-copy blockquote, .faq-list');
revealTargets.forEach((el) => el.dataset.reveal = '');

const heroVideo = document.querySelector('.hero-media');
if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVideo.pause();
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('visible'));
}
