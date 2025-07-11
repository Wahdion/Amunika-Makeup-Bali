document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('navbar');
  toggle?.addEventListener('click', () => {
    nav?.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.href;
  navLinks.forEach(link => {
    if (currentPage.includes(link.href)) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });

  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const id = section.getAttribute("id");
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => {
          if (link.href.includes(`#${id}`)) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      }
    });
  });

  const scrollElements = document.querySelectorAll(".scroll-fade");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  scrollElements.forEach(el => observer.observe(el));

  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const modalCloseBtn = document.getElementById("modalClose");

  document.querySelectorAll(".image-card").forEach(card => {
    card.addEventListener("click", () => {
      const src = card.getAttribute("data-src");
      if (modal && modalImg && src) {
        modalImg.src = src;
        modal.style.display = "flex";
      }
    });
  });

  modalCloseBtn?.addEventListener("click", () => {
    if (modal && modalImg) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal && modalImg) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });

  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (preloader) {
        preloader.classList.add("fade-out");
        setTimeout(() => preloader.remove(), 600);
      }
    }, 5000);
  });

  const scrollBtn = document.getElementById("scrollToTop");
  window.addEventListener("scroll", () => {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
  });

  scrollBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
