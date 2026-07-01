// TTF Prototype — entry point
// Plain ES module. Add more modules under js/ and import them here.

/** Wire up interactive bits once the DOM is ready. */
function init() {
  // Current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Demo interaction — replace with your prototype logic
  const cta = document.getElementById("cta");
  const output = document.getElementById("output");
  let count = 0;
  cta?.addEventListener("click", () => {
    count += 1;
    output.textContent = `Clicked ${count} time${count === 1 ? "" : "s"} — it works!`;
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
