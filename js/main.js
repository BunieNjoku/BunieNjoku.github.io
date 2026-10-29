// reveal sections as they scroll into view
const revealed = document.querySelectorAll(".reveal");

if (revealed.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1 }
  );

  revealed.forEach((el) => observer.observe(el));
}
