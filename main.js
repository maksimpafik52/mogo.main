// Знаходимо елементи в DOM
const burgerBtn = document.getElementById("burger-btn");
const nav = document.querySelector(".nav");

// Слухаємо клік на кнопці
burgerBtn.addEventListener("click", () => {
  // toggle() — додає клас якщо його немає, прибирає якщо є
  nav.classList.toggle("is-open");

  // Оновлюємо aria-label залежно від стану

  const isOpen = nav.classList.contains("is-open");

  burgerBtn.setAttribute(
    "aria-label",

    isOpen ? "Закрити меню" : "Відкрити меню",
  );
});

// Закриваємо меню при кліку поза ним
document.addEventListener("click", (event) => {
  // event.target — елемент, на який клікнули
  // contains() — перевіряє, чи є елемент всередині nav
  const isClickInsideNav = nav.contains(event.target);

  if (!isClickInsideNav && event.target !== burgerBtn) {
    nav.classList.remove("is-open");
  }
});