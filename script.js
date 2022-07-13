const scrollOnTop = document.querySelector(".scroll-on-top");
console.log(scrollOnTop);
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    scrollOnTop.style.display = "block";
  } else {
    scrollOnTop.style.display = "none";
  }
});

scrollOnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
