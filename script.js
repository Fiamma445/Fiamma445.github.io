const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const projectCards = Array.from(document.querySelectorAll(".project-card"));

const setActiveFilter = (targetFilter) => {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === targetFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  projectCards.forEach((card) => {
    const tags = card.dataset.tags.split(" ");
    const shouldShow = targetFilter === "all" || tags.includes(targetFilter);
    card.classList.toggle("is-hidden", !shouldShow);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
});
