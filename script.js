const dragScrollAreas = Array.from(document.querySelectorAll("[data-drag-scroll]"));

dragScrollAreas.forEach((area) => {
  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;
  let animationFrame = 0;
  const dots = Array.from(area.parentElement.querySelectorAll(".showcase-dots span"));

  const stopDragging = () => {
    isDragging = false;
    area.classList.remove("is-dragging");
  };

  const updateDots = () => {
    const slide = area.querySelector(".showcase-slide");
    if (!slide || dots.length === 0) {
      return;
    }

    const index = Math.round(area.scrollLeft / slide.clientWidth);
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
  };

  area.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) {
      return;
    }

    isDragging = true;
    startX = event.clientX;
    startScrollLeft = area.scrollLeft;
    area.classList.add("is-dragging");
    area.setPointerCapture(event.pointerId);
  });

  area.addEventListener("pointermove", (event) => {
    if (!isDragging) {
      return;
    }

    area.scrollLeft = startScrollLeft - (event.clientX - startX);
  });

  area.addEventListener("pointerup", stopDragging);
  area.addEventListener("pointercancel", stopDragging);
  area.addEventListener("pointerleave", stopDragging);
  area.addEventListener("scroll", () => {
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(updateDots);
  });
});
